<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UjianController;
use App\Http\Controllers\ApiController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('no-access', [DashboardController::class, 'no_access'])->name('login');
Route::group(['prefix' => 'peta'], function () {
  Route::get('/', [PetaController::class, 'index']);
});
Route::group(['prefix' => 'general'], function () {
  Route::get('/index', [ApiController::class, 'index']);
  Route::get('/chart', [ApiController::class, 'chart']);
});
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('login-by-token', [AuthController::class, 'login_by_token']);
    //Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function() {
      Route::get('logout', [AuthController::class, 'logout']);
      Route::get('user', [AuthController::class, 'user']);
    });
});
Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::group(['prefix' => 'ujian'], function () {
    Route::post('index', [UjianController::class, 'index']);
    Route::post('simpan', [UjianController::class, 'simpan']);
    Route::post('waktu', [UjianController::class, 'waktu']);
  });
  Route::group(['prefix' => 'dashboard'], function () {
    Route::get('index', [DashboardController::class, 'index']);
    Route::get('cp', [DashboardController::class, 'cp']);
    Route::get('provinsi', [DashboardController::class, 'provinsi']);
    Route::get('sekolah/{kode_wilayah}', [DashboardController::class, 'data_sekolah']);
    Route::get('wilayah/{kode_wilayah?}/{longitude?}/{latitude?}', [DashboardController::class, 'wilayah']);
    Route::get('unduhan', [DashboardController::class, 'unduhan']);
    Route::get('faq', [DashboardController::class, 'faqData']);
    Route::get('terbanyak', [DashboardController::class, 'terbanyak']);
    Route::get('statistik', [DashboardController::class, 'statistik']);
    Route::get('rekapitulasi', [DashboardController::class, 'rekapitulasi']);
    Route::get('pengguna', [DashboardController::class, 'pengguna']);
    Route::get('persentase', [DashboardController::class, 'persentase']);
    Route::get('sinkronisasi', [DashboardController::class, 'sinkronisasi']);
    Route::post('data-dapodik', [DapodikController::class, 'index']);
    Route::post('ambil-data', [DapodikController::class, 'ambil_data']);
    //Route::get('wilayah/{kode_wilayah?}', [DashboardController::class, 'wilayah']);
  });
  Route::group(['prefix' => 'referensi'], function () {
    Route::get('pd', [ReferensiController::class, 'index']);
    Route::post('ambil-pd', [ReferensiController::class, 'ambil_pd']);
    Route::post('proses-pd', [ReferensiController::class, 'proses_pd']);
    Route::get('hitung-pd', [ReferensiController::class, 'hitung_pd']);
    Route::get('sekolah', [ReferensiController::class, 'sekolah']);
    Route::get('blangko', [ReferensiController::class, 'blangko']);
    Route::get('blangko-ijazah', [ReferensiController::class, 'blangko_ijazah']);
    Route::post('blangko', [ReferensiController::class, 'save_blangko']);
    Route::post('generate-pengguna', [ReferensiController::class, 'new_user']);
    Route::post('keluarkan-pd', [ReferensiController::class, 'keluarkan_pd']);
    Route::post('batalkan-pd', [ReferensiController::class, 'batalkan_pd']);
    Route::post('nomor-ijazah', [ReferensiController::class, 'nomor_ijazah']);
    Route::post('batalkan-blangko', [ReferensiController::class, 'batalkan_blangko']);
    Route::get('berita-acara', [ReferensiController::class, 'berita_acara']);
    Route::post('berita-acara', [ReferensiController::class, 'simpan_berita_acara']);
    Route::post('make-fire', [ReferensiController::class, 'make_fire']);
    Route::post('luluskan', [ReferensiController::class, 'luluskan']);
    Route::group(['prefix' => 'users'], function () {
      Route::get('/', [UserController::class, 'index']);
      Route::post('/add', [UserController::class, 'add_user']);
      Route::post('/reset-password', [UserController::class, 'reset_password']);
      Route::get('/profile', [UserController::class, 'profile']);
      Route::post('/update-profile', [UserController::class, 'update_profile']);
      Route::post('/hapus', [UserController::class, 'hapus']);
    });
  });
  Route::group(['prefix' => 'blangko'], function () {
    Route::get('/', [BlangkoController::class, 'blangko_ijazah']);
    Route::get('/diterima', [BlangkoController::class, 'index']);
    Route::get('/cadangan', [BlangkoController::class, 'cadangan']);
    Route::post('/sekolah', [BlangkoController::class, 'sekolah']);
    Route::post('/simpan', [BlangkoController::class, 'save_blangko']);
    Route::post('/wilayah', [BlangkoController::class, 'wilayah']);
    Route::post('/simpan-dinas', [BlangkoController::class, 'simpan_blangko_dinas']);
    Route::post('/confirm', [BlangkoController::class, 'confirm']);
    Route::get('/preview', [BlangkoController::class, 'preview']);
    Route::post('/verifikasi', [BlangkoController::class, 'proses_verifikasi']);
    Route::post('/batalkan-verifikasi', [BlangkoController::class, 'batalkan_verifikasi']);
    Route::get('/verifikasi', [BlangkoController::class, 'verifikasi']);
    Route::post('/distribusi', [BlangkoController::class, 'distribusi']);
    Route::post('/selected', [BlangkoController::class, 'selected']);
  });
  Route::group(['prefix' => 'uploads'], function () {
    Route::post('/file-excel', [UploadController::class, 'index']);
    Route::post('/berita-acara', [UploadController::class, 'berita']);
    Route::post('/scan-pdf', [UploadController::class, 'scan_pdf']);
  });
  Route::group(['prefix' => 'berita-acara'], function () {
    Route::get('/', [BeritaController::class, 'index']);
    Route::get('/baca', [BeritaController::class, 'baca']);
  });
  Route::group(['prefix' => 'pengaduan'], function () {
    Route::get('/', [PengaduanController::class, 'index']);
    Route::get('/kategori', [PengaduanController::class, 'kategori']);
    Route::get('/detil/{id}', [PengaduanController::class, 'detil']);
    Route::post('/tambah', [PengaduanController::class, 'tambah']);
    Route::post('/jawab', [PengaduanController::class, 'jawab']);
  });
});
