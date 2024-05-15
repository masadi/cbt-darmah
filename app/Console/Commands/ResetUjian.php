<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Jawaban_siswa;

class ResetUjian extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset:ujian';

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
        $data = Jawaban_siswa::whereHas('soal', function($query){
            $query->whereHas('ujian', function($query){
                $query->where('ujian_id', 'f7d601de-ba75-4a0e-ac60-8fbb2a450b61');
            });
        })->where('user_id', '2b3e506f-9960-416c-a804-5cdf54d5f91f')->get();
        dd($data);
    }
}
