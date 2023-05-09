<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Rap2hpoutre\FastExcel\FastExcel;
use App\Models\Ujian;
use App\Models\Soal;
use App\Models\Jawaban;
use App\Models\Pembelajaran;

class GenerateUjian extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:ujian';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $mapel = [
            1 => 'soal_ips', 
            2 => 'soal_pkn'
        ];
        $folder = public_path('templates');
        foreach($mapel as $mata_pelajaran_id => $file){
            $pembelajaran = Pembelajaran::where('mata_pelajaran_id', $mata_pelajaran_id)->whereHas('rombongan_belajar', function($query){
                $query->where('tingkat', 9);
            })->first();
            $ujian = Ujian::updateOrCreate(
                [
                    'pembelajaran_id' => $pembelajaran->pembelajaran_id,
                    'status' => 1,
                ],
                [
                    'nama' => 'Ujian Sekolah '.$pembelajaran['nama_mata_pelajaran'],
                ]
            );
            $this->proses_ujian($folder, $file, $ujian);
        }
    }
    private function proses_ujian($folder, $file, $ujian){
        $users = (new FastExcel)->import($folder.'/'.$file.'.xlsx', function ($item) use ($ujian){
            //dd($item);
            $soal = Soal::updateOrCreate(
                [
                    'ujian_id' => $ujian->ujian_id,
                    'nomor' => $item['no'],
                ],
                [
                    'deskripsi' => $this->create_deskripsi($item['soal']),
                ]
            );
            Jawaban::updateOrCreate(
                [
                    'soal_id' => $soal->soal_id,
                    'urut' => 1,
                    'opsi' => 'A',
                    'benar' => (strtolower($item['kunci']) == 'a') ? 1 : 0,
                ],
                [
                    'deskripsi' => $this->create_deskripsi($item['a']),
                ]
            );
            Jawaban::updateOrCreate(
                [
                    'soal_id' => $soal->soal_id,
                    'urut' => 2,
                    'opsi' => 'B',
                    'benar' => (strtolower($item['kunci']) == 'b') ? 1 : 0,
                ],
                [
                    'deskripsi' => $this->create_deskripsi($item['b']),
                ]
            );
            Jawaban::updateOrCreate(
                [
                    'soal_id' => $soal->soal_id,
                    'urut' => 3,
                    'opsi' => 'C',
                    'benar' => (strtolower($item['kunci']) == 'c') ? 1 : 0,
                ],
                [
                    'deskripsi' => $this->create_deskripsi($item['c']),
                ]
            );
            Jawaban::updateOrCreate(
                [
                    'soal_id' => $soal->soal_id,
                    'urut' => 4,
                    'opsi' => 'D',
                    'benar' => (strtolower($item['kunci']) == 'd') ? 1 : 0,
                ],
                [
                    'deskripsi' => $this->create_deskripsi($item['d']),
                ]
            );
        });
    }
    private function create_deskripsi($item){
        for($i=1;$i<=100;$i++){
            $string = ['#gambar_'.$i.'_ips#', '#gambar_'.$i.'_pkn#'];
            $gambar = ['<img src="/upload/images/gambar_'.$i.'_ips.png" />', '<img src="/upload/images/gambar_'.$i.'_pkn.png" />'];
            $item = str_replace($string, $gambar, $item);
        }
        return nl2br($item);
    }
}
