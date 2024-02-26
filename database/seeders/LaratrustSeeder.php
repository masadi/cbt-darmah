<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;

class LaratrustSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateLaratrustTables();

        $config = Config::get('laratrust_seeder.roles_structure');

        if ($config === null) {
            $this->command->error("The configuration has not been published. Did you run `php artisan vendor:publish --tag=\"laratrust-seeder\"`");
            $this->command->line('');
            return false;
        }

        $mapPermission = collect(config('laratrust_seeder.permissions_map'));
        foreach ($config as $key => $modules) {
            dump($key);
        }
        //dd($config);
        foreach ($config as $key => $modules) {

            // Create a new role
            $role = Role::create([
                'name' => $key,
                'display_name' => ucwords(str_replace('_', ' ', $key)),
                'description' => ucwords(str_replace('_', ' ', $key))
            ]);
            $permissions = [];

            $this->command->info('Creating Role '. strtoupper($key));

            // Reading role permission modules
            foreach ($modules as $module => $value) {

                foreach (explode(',', $value) as $p => $perm) {

                    $permissionValue = $mapPermission->get($perm);

                    $permissions[] = Permission::create([
                        'name' => $module . '-' . $permissionValue,
                        'display_name' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                        'description' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                    ])->id;

                    $this->command->info('Creating Permission to '.$permissionValue.' for '. $module);
                }
            }

            // Attach all permissions to the role
            if($permissions){
                $role->permissions()->sync($permissions);
            }

            if (Config::get('laratrust_seeder.create_users')) {
                $this->command->info("Creating '{$key}' user");
                // Create default user for each role
                $user = User::create([
                    'name' => ucwords(str_replace('_', ' ', $key)),
                    'email' => $key.'@gmail.com',
                    'password' => bcrypt('12345678'),
                ]);
                $user->attachRole($role);
            }
            /*$user = User::updateOrCreate(
                [
                    'name' => 'Administrator',
                    'email' => 'admin@gmail.com',
                ],
                [
                    'password' => bcrypt(12345678),
                ]
            );
            $user->attachRole('admin');
            $user = User::updateOrCreate(
                [
                    'name' => 'DPW 1',
                    'email' => 'dpw@gmail.com',
                ],
                [
                    'regency_id' => 3527,
                    'password' => bcrypt(12345678),
                ]
            );
            $user->attachRole('dpw');
            $user = User::updateOrCreate(
                [
                    'name' => 'Contoh Alumni',
                    'email' => 'alumni@gmail.com',
                ],
                [
                    'password' => bcrypt(12345678),
                    'tahun_masuk' => 2010,
                    'tahun_lulus' => 2020,
                ]
            );
            $user->attachRole('alumni');
            User::updateOrCreate(
                [
                    'name' => 'Contoh Alumni 2',
                    'email' => 'alumni2@gmail.com',
                ],
                [
                    'password' => bcrypt(12345678),
                ]
            );
            $user->attachRole('alumni_non_aktif');*/
        }
    }

    /**
     * Truncates all the laratrust tables and the users table
     *
     * @return  void
     */
    public function truncateLaratrustTables()
    {
        $this->command->info('Truncating User, Role and Permission tables');
        Schema::disableForeignKeyConstraints();

        DB::table('permission_role')->truncate();
        DB::table('permission_user')->truncate();
        DB::table('role_user')->truncate();

        if (Config::get('laratrust_seeder.truncate_tables')) {
            DB::table('roles')->truncate();
            DB::table('permissions')->truncate();
            
            if (Config::get('laratrust_seeder.create_users')) {
                //$usersTable = (new \App\Models\User)->getTable();
                //DB::table($usersTable)->truncate();
            }
        }

        Schema::enableForeignKeyConstraints();
    }
}
