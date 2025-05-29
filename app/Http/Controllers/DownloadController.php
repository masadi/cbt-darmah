<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use App\Models\Peserta_didik;
use App\Models\Mata_pelajaran;
class DownloadController extends Controller
{
    public function nilai(){
        $mapel = Mata_pelajaran::find(request()->route('mata_pelajaran_id'));
        $pd = Peserta_didik::with(['jawaban_siswa' => function($query){
            $query->with(['jawaban']);
            $query->whereHas('soal', function($query){
                $query->whereHas('ujian', function($query){
                    $query->whereHas('pembelajaran', function($query){
                        $query->where('mata_pelajaran_id', request()->route('mata_pelajaran_id'));
                    });
                });
            });
        }])->withCount([
            'jawaban_siswa as benar' => function($query){
                $query->whereHas('jawaban', function($query){
                    $query->where('benar', 1);
                });
                $query->whereHas('soal', function($query){
                    $query->whereHas('ujian', function($query){
                        $query->whereHas('pembelajaran', function($query){
                            $query->where('mata_pelajaran_id', request()->route('mata_pelajaran_id'));
                        });
                    });
                });
            },
            'jawaban_siswa as salah' => function($query){
                $query->whereHas('jawaban', function($query){
                    $query->where('benar', 0);
                });
                $query->whereHas('soal', function($query){
                    $query->whereHas('ujian', function($query){
                        $query->whereHas('pembelajaran', function($query){
                            $query->where('mata_pelajaran_id', request()->route('mata_pelajaran_id'));
                        });
                    });
                });
            },
        ])->find(request()->route('peserta_didik_id'));
        $data = [];
        $data['NO'] = 1;
        $data['NAMA'] = $pd->nama;
        $data['NISN'] = $pd->nisn;
        $jawaban_siswa = $pd->jawaban_siswa->sortBy(function($query){
            return $query->jawaban->soal->nomor; 
        });
        foreach($jawaban_siswa as $jawaban){
            $data[$jawaban->jawaban->soal->nomor] = $jawaban->opsi;
        }
        $nilai = ($pd->benar*10)/4;
        $data['BENAR'] = $pd->benar;
        $data['SALAH'] = $pd->salah;
        $data['NILAI'] = number_format($nilai, 0, '.', '.');
        $file = 'Nilai '.clean($pd->nama).' Mata Pelajaran '.$mapel->nama;
        return (new FastExcel([$data]))->download($file.'.xlsx');
        dump($data);
        dd($pd);
    }
}
