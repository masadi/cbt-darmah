<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Mata_pelajaran;
use App\Models\Pembelajaran;
use App\Models\Rombongan_belajar;
use App\Models\Guru;

class GeneratePembelajaran extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:pembelajaran';

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
        $data = [
            [
                'nama' => 'Kelas 9',
                'tingkat' => 9,
                'pembelajaran' => [
                    [
                        'mata_pelajaran_id' => 1,
                        'nama_mata_pelajaran' => 'Ilmu Pengetahuan Sosial (IPS)',
                        'nuptk' => '5046766667200003',
                    ],
                    [
                        'mata_pelajaran_id' => 2,
                        'nama_mata_pelajaran' => 'Pendidikan Kewarganegaraan (PKn)',
                        'nuptk' => '5046766667200003',
                    ]
                ],
            ]
        ];
        foreach($data as $d){
            $rombel = Rombongan_belajar::updateOrCreate([
                'nama' => $d['nama'],
                'tingkat' => $d['tingkat'],
            ]);
            foreach($d['pembelajaran'] as $pembelajaran){
                $guru = Guru::where('nuptk', '5046766667200003')->first();
                Mata_pelajaran::updateOrcreate(
                    [
                        'mata_pelajaran_id' => $pembelajaran['mata_pelajaran_id'],
                    ],
                    [
                        'nama' => $pembelajaran['nama_mata_pelajaran'],
                    ]
                );
                Pembelajaran::updateOrcreate(
                    [
                        'rombongan_belajar_id' => $rombel->rombongan_belajar_id,
                        'mata_pelajaran_id' => $pembelajaran['mata_pelajaran_id'],
                        'guru_id' => $guru->guru_id,
                    ],
                    [
                        'nama_mata_pelajaran' => $pembelajaran['nama_mata_pelajaran'],
                    ]
                );
            }
        }
    }
}
