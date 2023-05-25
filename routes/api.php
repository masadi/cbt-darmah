<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UjianController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\RombelController;
use App\Http\Controllers\SoalController;
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
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    
    Route::group(['middleware' => 'auth:sanctum'], function() {
      Route::get('logout', [AuthController::class, 'logout']);
      Route::get('user', [AuthController::class, 'user']);
    });
});
Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::group(['prefix' => 'general'], function () {
    Route::get('/index', [ApiController::class, 'index']);
  });
  Route::group(['prefix' => 'ujian'], function () {
    Route::post('index', [UjianController::class, 'index']);
    Route::post('simpan', [UjianController::class, 'simpan']);
    Route::post('waktu', [UjianController::class, 'waktu']);
    Route::post('selesai', [UjianController::class, 'selesai']);
    Route::post('hasil', [UjianController::class, 'hasil']);
  });
  Route::group(['prefix' => 'dashboard'], function () {
    Route::get('/', [DashboardController::class, 'index']);
  });
  Route::group(['prefix' => 'rombongan-belajar'], function () {
    Route::get('/', [RombelController::class, 'index']);
    Route::post('/pembelajaran', [RombelController::class, 'pembelajaran']);
    Route::post('/simpan-pembelajaran', [RombelController::class, 'simpan_pembelajaran']);
    Route::post('/hapus-pembelajaran', [RombelController::class, 'hapus_pembelajaran']);
  });
  Route::group(['prefix' => 'bank-soal'], function () {
    Route::get('/', [SoalController::class, 'index']);
    Route::post('/soal', [SoalController::class, 'soal']);
    Route::post('/simpan', [SoalController::class, 'simpan']);
    Route::post('/upload', [SoalController::class, 'upload']);
  });
});
