<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;
use App\Traits\Uuid;

class User extends Authenticatable
{
    use LaratrustUserTrait;
    use HasApiTokens, HasFactory, Notifiable;
    use Uuid;
    public $incrementing = false;
    public $keyType = 'string';
	protected $primaryKey = 'user_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function sekolah()
    {
        return $this->hasOne(Sekolah::class, 'sekolah_id', 'sekolah_id');
    }
    public function wilayah()
    {
        return $this->hasOne(Mst_wilayah::class, 'kode_wilayah', 'kode_wilayah')->with(['parent']);
    }
    public function provinsi()
	{
		return $this->hasOne(Mst_wilayah::class, 'kode_wilayah', 'kode_wilayah');
	}
	public function kabupaten()
	{
		return $this->hasOne(Mst_wilayah::class, 'kode_wilayah', 'kode_wilayah');
	}
    public function kcd()
    {
        return $this->hasMany(User_kcd::class, 'user_id', 'user_id');
    }
}
