<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rombongan_belajar;
use App\Models\Pembelajaran;
use App\Models\Guru;

class RombelController extends Controller
{
    public function index(){
        $data = Rombongan_belajar::orderBy(request()->sortby, request()->sortbydesc)
        ->when(request()->q, function($query) {
            $query->where('nama', 'ilike', '%'.request()->q.'%');
        })
        ->paginate(request()->per_page);
        return response()->json(['status' => 'success', 'data' => $data]);
    }
    public function pembelajaran(){
        $rombel = Rombongan_belajar::find(request()->rombongan_belajar_id);
        $data = Pembelajaran::with(['guru'])->where('rombongan_belajar_id', request()->rombongan_belajar_id)->orderBy('mata_pelajaran_id')->get();
        return response()->json([
            'data' => $data,
            'guru' => Guru::orderBy('nama')->get(),
            'judul' => 'Pembelajaran '.$rombel->nama,
        ]);
    }
    public function simpan_pembelajaran(){
        $insert = 0;
        foreach(request()->form['guru_id'] as $pembelajaran_id => $guru_id){
            if(Pembelajaran::where('pembelajaran_id', $pembelajaran_id)->update(['guru_id' => $guru_id])){
                $insert++;
            }
        }
        if($insert){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil',
                'text' => 'Pembelajaran berhasil disimpan',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal',
                'text' => 'Pembelajaran gagal disimpan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
    public function hapus_pembelajaran(){
        $insert = 1;
        if($insert){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil',
                'text' => 'Pembelajaran berhasil disimpan',
                'pembelajaran' => Pembelajaran::with(['guru'])->where('rombongan_belajar_id', request()->rombongan_belajar_id)->orderBy('mata_pelajaran_id')->get(),
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal',
                'text' => 'Pembelajaran gagal disimpan. Silahkan coba beberapa saat lagi!',
                'pembelajaran' => Pembelajaran::with(['guru'])->where('rombongan_belajar_id', request()->rombongan_belajar_id)->orderBy('mata_pelajaran_id')->get(),
            ];
        }
        return response()->json($data);
    }
}
