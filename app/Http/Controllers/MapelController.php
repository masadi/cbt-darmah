<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\Mata_pelajaran;

class MapelController extends Controller
{
    public function index(){
        $data = Mata_pelajaran::orderBy(request()->sortby, request()->sortbydesc)
        ->when(request()->q, function($query) {
            $query->where('nama', 'ilike', '%'.request()->q.'%');
        })
        ->paginate(request()->per_page);
        return response()->json(['status' => 'success', 'data' => $data]);
    }
    public function simpan(){
        $message = [
            'nama.required' => 'Nama Mata Pelajaran tidak boleh kosong',
            'nama.unique' => 'Nama Mata Pelajaran terdeteksi existing',
        ];
        $rules = [
            'nama' => 'required|unique:mata_pelajaran',
        ];
        $validator = Validator::make(request()->all(), $rules, $message);
        $validated = $validator->validated();
        $insert = Mata_pelajaran::create(['nama' => request()->nama]);
        if($insert){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Mata Pelajaran berhasil disimpan',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Mata Pelajaran gagal disimpan. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
    public function update(){
        $message = [
            'nama.required' => 'Nama Mata Pelajaran tidak boleh kosong',
            'nama.unique' => 'Nama Mata Pelajaran terdeteksi existing',
        ];
        $rules = [
            'nama' => [
                'required',
                Rule::unique('mata_pelajaran')->ignore(request()->mata_pelajaran_id, 'mata_pelajaran_id'),
            ]
        ];
        $validator = Validator::make(request()->all(), $rules, $message);
        $validated = $validator->validated();
        $insert = Mata_pelajaran::find(request()->mata_pelajaran_id);
        $insert->nama = request()->nama;
        if($insert->save()){
            $data = [
                'icon' => 'success',
                'title' => 'Berhasil!',
                'text' => 'Mata Pelajaran berhasil diperbaharui',
            ];
        } else {
            $data = [
                'icon' => 'error',
                'title' => 'Gagal!',
                'text' => 'Mata Pelajaran gagal diperbaharui. Silahkan coba beberapa saat lagi!',
            ];
        }
        return response()->json($data);
    }
}
