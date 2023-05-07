<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use App\Models\User;
use App\Models\User_kcd;
use App\Models\Role;
use App\Models\Mst_wilayah;

class UserController extends Controller
{
    public function loggedUser(){
        return auth()->user();
    }
    public function index(){
        $data = User::with(['kcd.wilayah'])->where($this->kondisi())->orderBy(request()->sortby, request()->sortbydesc)
        ->when(request()->q, function($query) {
            $query->where($this->kondisi());
            $query->where('name', 'ilike', '%'.request()->q.'%');
        })
        ->paginate(request()->per_page);
        //$data_wilayah = [];
        $data_wilayah = Mst_wilayah::select('kode_wilayah', 'nama')->where('mst_kode_wilayah', $this->loggedUser()->kode_wilayah)->get();
        /*foreach($get_wilayah as $wilayah){
            $data_wilayah[] = [
                'value' => $wilayah->kode_wilayah,
                'text' => $wilayah->nama,
            ];
        }*/
        return response()->json(['status' => 'success', 'data' => $data, 'data_wilayah' => $data_wilayah]);
    }
    private function kondisi(){
        return function($query){
            if($this->loggedUser()->hasRole('disprov')){
                $query->whereRoleIs(['diskab']);
                $query->whereHas('kcd', function($query){
                    $query->whereHas('wilayah', function($query){
                        $query->whereHas('parent', function($query){
                            $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
                        });
                    });
                });
            }
            if($this->loggedUser()->hasRole('diskab')){
                $query->whereRoleIs(['sekolah']);
                $query->whereHas('sekolah', function($query){
                    $query->whereHas('kabupaten', function($query){
                        $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
                    });
                });
            }
        };
    }
    public function add_user(){
        $message = [
            'name.required' => 'Nama Lengkap tidak boleh kosong',
            'email.required' => 'Email tidak boleh kosong',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email telah terdaftar',
            'wilayah_kcd.required' => 'Kabupaten/Kota tidak boleh kosong',
            'password.required' => 'Password tidak boleh kosong',
        ];
        $rules = [
            'name' => ['required'],
            'email' => [
                'required',
                'email',
                Rule::unique('users'),
            ],
            'wilayah_kcd' => 'required',
            'password' => 'required',
        ];
        $validator = Validator::make(request()->all(), $rules, $message)->validated();
        $user = User::create([
            'name' => request()->name,
            'email' => strtolower(request()->email),
            'password' => bcrypt(request()->password),
            //'kode_wilayah' => request()->kode_wilayah,
            'username' => strstr(strtolower(request()->email), '@', true)
        ]);
        foreach(request()->wilayah_kcd as $kode){
            User_kcd::updateOrCreate([
                'kode_wilayah' => $kode,
                'user_id' => $user->user_id,
            ]);
        }
        $role = Role::where('name', 'diskab')->first();
        $user->attachRole($role);
        //$username = strstr($email, '@', true); //"username"
        if($user){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Pengguna Cabang Dinas berhasil disimpan',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Pengguna Cabang Dinas gagal disimpan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
    public function reset_password(){
        $user = User::find(request()->user_id);
        if($user){
            if($user->hasRole('administrator')){
                $user->password = bcrypt(12345678);
            } elseif($user->hasRole('disprov') || $user->hasRole('diskab')){
                $user->password = bcrypt($user->email);
            } else {
                $user->password = bcrypt($user->username);
            }
            if($user->save()){
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Password Pengguna berhasil direset',
                ];
            } else {
                $data = [
                    'icon' => 'error',
                    'title' => 'Gagal!',
                    'text' => 'Password Pengguna gagal direset. Silahkan coba beberapa saat lagi!',
                ];
            }
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Pengguna tidak ditemukan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
    public function profile(){
        $user = User::with(['sekolah' => function($query){
            $query->select('sekolah_id', 'npsn', 'nama', 'alamat', 'desa_kelurahan', 'kecamatan', 'kabupaten', 'provinsi', 'kode_pos', 'no_telp', 'no_fax', 'email', 'website');
        }])->find($this->loggedUser()->user_id);
        return response()->json($user);
    }
    public function update_profile(){
        $user = User::find($this->loggedUser()->user_id);
        if(request()->has('name')){
            $message = [
                'name.required' => 'Nama Lengkap tidak boleh kosong',
                'email.required' => 'Email tidak boleh kosong',
                'email.email' => 'Email tidak valid',
                'email.unique' => 'Email telah terdaftar',
                'no_hp.required' => 'Nomor Whatsapp Aktif tidak boleh kosong',
            ];
            $rules = [
                'name' => ['required'],
                'email' => [
                    'required',
                    'email',
                    Rule::unique('users')->ignore($this->loggedUser()->user_id, 'user_id'),
                ],
                'no_hp' => ['required'],
            ];
            $validator = Validator::make(request()->all(), $rules, $message)->validated();
            $user->name = request()->name;
            //$user->email = request()->email;
            $user->no_hp = request()->no_hp;
            if($user->save()){
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Profil Pengguna berhasil diperbaharui',
                ];
            } else {
                $data = [
                    'icon' => 'danger',
                    'title' => 'Gagal!',
                    'text' => 'Profil Pengguna gagal diperbaharui. Silahkan coba beberapa saat lagi!',
                ];
            }
        } else {
            $message = [
                //'current_password.required' => 'Kata sandi saat ini tidak boleh kosong',
                //'current_password.current_password' => 'Kata sandi salah',
                'password.required' => 'Kata sandi baru tidak boleh kosong',
                'password.confirmed' => 'Konfirmasi kata sandi tidak sesuai dengan Kata sandi baru',
                'password_confirmation.required' => 'Konfirmasi kata sandi tidak boleh kosong',
            ];
            $rules = [
                //'current_password' => ['required', 'current_password'],
                'password' => [
                    'required',
                    'confirmed',
                ],
                'password_confirmation' => ['required'],
            ];
            $validator = Validator::make(request()->all(), $rules, $message)->validated();
            $user->password = Hash::make(request()->password);
            if($user->save()){
                if(request()->password == $user->username){
                    $ability = [
                        [
                            'action' => 'read',
                            'subject' => 'Web'
                        ]
                    ];
                } else {
                    if($user->hasRole('administrator')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Administrator'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ]
                        ];
                    } elseif($user->hasRole('disprov')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Disprov'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Fire'
                            ],
                        ];
                    }
                    if($user->hasRole('diskab')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Diskab'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ]
                        ];
                    }
                    if($user->hasRole('sekolah')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Sekolah'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => ($user->fire) ? 'Fire' : 'NotFire',
                            ],
                        ];
                    }
                    if($user->hasRole('verifikator')){ //alumni_aktif
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Verifikator'
                            ]
                        ];
                    }
                }
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Password Pengguna berhasil diperbaharui',
                    'ability' => $ability,
                ];
            } else {
                $data = [
                    'icon' => 'danger',
                    'title' => 'Gagal!',
                    'text' => 'Password Pengguna gagal diperbaharui. Silahkan coba beberapa saat lagi!',
                ];
            }
        }
        return response()->json($data);
    }
    public function hapus(){
        $user = User::find(request()->user_id);
        if($user){
            if($user->delete()){
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Password Pengguna berhasil dihapus',
                ];
            } else {
                $data = [
                    'icon' => 'error',
                    'title' => 'Gagal!',
                    'text' => 'Password Pengguna gagal dihapus. Silahkan coba beberapa saat lagi!',
                ];
            }
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Pengguna tidak ditemukan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
}
