<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rombongan_belajar;
use App\Models\Ujian;

class ApiController extends Controller
{
    public function index(){
        $data = [
            'user' => $this->loggedUser(),
            'rombel' => Rombongan_belajar::whereHas('anggota_rombel', function($query){
                $query->where('peserta_didik_id', $this->loggedUser()->peserta_didik_id);
            })->first(),
            'ujian' => Ujian::withCount([
                'soal', 
                'jawaban_siswa' => function($query){
                $query->whereHas('user', function($query){
                    $query->where('peserta_didik_id', $this->loggedUser()->peserta_didik_id);
                });
            }])->with([
                'pembelajaran',
                'ujian_siswa' => function($query){
                    $query->where('user_id', $this->loggedUser()->user_id);
                },
            ])->whereHas('pembelajaran', function($query){
                $query->whereHas('rombongan_belajar', function($query){
                    $query->whereHas('anggota_rombel', function($query){
                        $query->where('peserta_didik_id', $this->loggedUser()->peserta_didik_id);
                    });
                });
            })->get(),
        ];
        return response()->json($data);
    }
    private function loggedUser(){
        return auth()->user();
    }
}
