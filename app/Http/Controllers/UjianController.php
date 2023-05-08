<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ujian;
use App\Models\Soal;
use App\Models\Jawaban;
use App\Models\Jawaban_siswa;
use App\Models\Ujian_siswa;
use Carbon\Carbon;

class UjianController extends Controller
{
    public function index(){
        $data = [
            'soal' => Soal::with([
                'jawaban',
                'jawaban_siswa' => function($query){
                    $query->where('user_id', $this->loggedUser()->user_id);
                }
            ])->where('ujian_id', request()->ujian_id)->where('nomor', request()->nomor)->first(),
            'ujian' => Ujian::withCount('soal')->find(request()->ujian_id),
        ];
        return response()->json($data);
    }
    private function loggedUser(){
        return auth()->user();
    }
    public function simpan(){
        $data = NULL;
        if(request()->jawaban){
            $jawaban = Jawaban::where(function($query){
                $query->where('soal_id', request()->soal_id);
                $query->where('opsi', request()->jawaban);
            })->first();
            if($jawaban){
                $data = Jawaban_siswa::updateOrCreate(
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
        return response()->json($data);
    }
    public function waktu(){
        $waktu = Ujian_siswa::where(function($query){
            $query->where('ujian_id', request()->ujian_id);
            $query->where('user_id', $this->loggedUser()->user_id);
        })->first();
        $ujian = Ujian::withCount('soal')->find(request()->ujian_id);
        $jumlah_soal = [];
        for($i=1;$i<=$ujian->soal_count;$i++){
            $jumlah_soal[] = $i;
        }
        $data = [
            'waktu' => ($waktu) ? $waktu->waktu : 120,
            'jumlah_soal' => $jumlah_soal,
        ];
        return response()->json($data);
    }
    public function selesai(){
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
}
