<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Guru;
use App\Models\User;
use App\Models\Role;
use App\Models\Pembelajaran;

class GenerateGuru extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:guru';

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
                'nama' => 'Moh. Masrur',
                'nuptk' => '5046766667200003',
            ]
        ];
        $role = Role::where('name', 'guru')->first();
        foreach($data as $d){
            $guru = Guru::updateOrCreate(
                [
                    'nama' => $d['nama'],
                ],
                [
                    'nuptk' => $d['nuptk']
                ]
            );
            $user = User::updateOrCreate(
                [
                    'username' => $guru->nuptk,
                ],
                [
                    'name' => $guru->nama,
                    'email' => $guru->nuptk.'@email.com',
                    'password' => bcrypt('12345678')
                ]
            );
            if(!$user->hasRole('guru')){
                $user->attachRole($role);
            }
        }
    }
}
