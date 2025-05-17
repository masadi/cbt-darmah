<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ujian;
use App\Models\Soal;
use App\Models\Jawaban;
use App\Models\Jawaban_siswa;
use App\Models\Ujian_siswa;
use Carbon\Carbon;
use Storage;

class UjianController extends Controller
{
    public function index(){
        //$random = $collection->random(3);
        //$random->all();
        $jumlah = Soal::where('ujian_id', request()->ujian_id)->count();
        $data = [
            'soal' => Soal::with([
                'jawaban' => function($query){
                    $query->orderBy('urut');
                },
                'jawaban_siswa' => function($query){
                    $query->where('user_id', $this->loggedUser()->user_id);
                }
            ])->where('ujian_id', request()->ujian_id)->where('nomor', request()->nomor)->first(),
            'ujian' => Ujian::withCount('soal')->find(request()->ujian_id),
            'all_soal' => Soal::with(['jawaban_siswa' => function($query){
                $query->where('user_id', $this->loggedUser()->user_id);
            }])->where('ujian_id', request()->ujian_id)->inRandomOrder()->get(),
        ];
        return response()->json($data);
    }
    public function semua_soal(){
        $file = request()->ujian_id.'-'.$this->loggedUser()->user_id.'.json';
        if(Storage::disk('public')->exists($file)){
            $data = json_decode(Storage::disk('public')->get($file));
        } else {
            $data = Soal::with(['jawaban_siswa' => function($query){
                $query->where('user_id', $this->loggedUser()->user_id);
            }])->where('ujian_id', request()->ujian_id)->inRandomOrder()->get();
            Storage::disk('public')->put($file, json_encode($data, JSON_PRETTY_PRINT));
        }
        return response()->json($data);
    }
    public function soal(){
        $soal = Soal::with(['jawaban', 'jawaban_siswa' => function($query){
            $query->where('user_id', $this->loggedUser()->user_id);
        }])->find(request()->soal_id);
        $file = 'jawaban'.$soal->ujian_id.'-'.$this->loggedUser()->user_id.'.json';
        if(Storage::disk('public')->exists($file)){
            $jawaban_siswa = json_decode(Storage::disk('public')->get($file));
        } else {
            $jawaban_siswa = [];
        }
        $data = [
            'soal' => $soal,
            'jawaban_siswa' => $jawaban_siswa,
        ];
        return response()->json($data);
    }
    private function loggedUser(){
        return auth()->user();
    }
    public function simpan(){
        $file = 'jawaban'.request()->ujian_id.'-'.$this->loggedUser()->user_id.'.json';
        $data = NULL;
        $jawaban_siswa = NULL;
        if(request()->jawaban){
            $jawaban = Jawaban::where(function($query){
                $query->where('soal_id', request()->soal_id);
                $query->where('opsi', request()->jawaban);
            })->first();
            if($jawaban){
                $jawaban_siswa = Jawaban_siswa::updateOrCreate(
                    [
                        'user_id' => $this->loggedUser()->user_id,
                        'soal_id' => request()->soal_id,
                    ],
                    [
                        'jawaban_id' => $jawaban->jawaban_id,
                        'opsi' => request()->jawaban,
                        'is_ragu' => (request()->ragu) ? 1 : 0
                    ]
                );
                if(Storage::disk('public')->exists($file)){
                    $get = json_decode(Storage::disk('public')->get($file));
                    $collection = collect($get);
                    $filtered = $collection->reject(function ($value, $key) {
                        return $value->soal_id == request()->soal_id;
                    });
                    $collection = collect($filtered->all());
                    $collection->push($jawaban_siswa);
                    $unique = $collection->unique('soal_id');
                    Storage::disk('public')->put($file, json_encode($unique->values()->all(), JSON_PRETTY_PRINT));
                } else {
                    Storage::disk('public')->put($file, json_encode([$jawaban_siswa], JSON_PRETTY_PRINT));
                }
                //Storage::disk('public')->put($this->loggedUser()->user_id.'/'.request()->soal_id.'.json', json_encode($jawaban_siswa, JSON_PRETTY_PRINT));
            }
        }
        $actual_start_at = Carbon::now()->format('H:i:s');
        $actual_end_at   = Carbon::parse(date('H:i:s', strtotime(request()->waktu)));
        $data            = Ujian_siswa::updateOrCreate(
            [
                'user_id' => $this->loggedUser()->user_id,
                'ujian_id' => request()->ujian_id,
            ],
            [
                'waktu' => $actual_end_at->diffInMinutes($actual_start_at, true),
            ]
        );
        //date('H:i:s', strtotime(request()->waktu));
        return response()->json($jawaban_siswa);
    }
    public function waktu(){
        $waktu = Ujian_siswa::where(function($query){
            $query->where('ujian_id', request()->ujian_id);
            $query->where('user_id', $this->loggedUser()->user_id);
        })->first();
        $data = [
            'waktu' => ($waktu) ? $waktu->waktu : 120,
            //'jumlah_soal' => $all_soal->count(),
            //'all_soal' => $all_soal,
        ];
        return response()->json($data);
    }
    public function selesai(){
        $this->simpan();
        $insert = Ujian_siswa::where(function($query){
            $query->where('ujian_id', request()->ujian_id);
            $query->where('user_id', $this->loggedUser()->user_id);
        })->update(['status' => 1]);
        if($insert){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Ujian berhasil disimpan',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Ujian gagal disimpan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
    public function hasil(){
        $ujian = Ujian::withCount([
            'jawaban_siswa as benar' => function($query){
                $query->where('user_id', $this->loggedUser()->user_id);
                $query->whereHas('jawaban', function($query){
                    $query->where('benar', 1);
                });
            },
            'jawaban_siswa as salah' => function($query){
                $query->where('user_id', $this->loggedUser()->user_id);
                $query->whereHas('jawaban', function($query){
                    $query->where('benar', 0);
                });
            }
        ])->find(request()->ujian_id);
        $data = [
            'mata_ujian' => $ujian->nama,
            'benar' => $ujian->benar,
            'salah' => $ujian->salah,
        ];
        return response()->json($data);
    }
}
