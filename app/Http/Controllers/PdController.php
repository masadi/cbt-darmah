<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Peserta_didik;
use App\Models\Mata_pelajaran;

class PdController extends Controller
{
    public function index(){
        $data = Peserta_didik::with(['kelas'])->orderBy(request()->sortby, request()->sortbydesc)
        ->when(request()->q, function($query) {
            $query->where('nama', 'ilike', '%'.request()->q.'%');
            $query->orWhere('nisn', 'ilike', '%'.request()->q.'%');
        })
        ->paginate(request()->per_page);
        return response()->json(['status' => 'success', 'data' => $data, 'mapel' => Mata_pelajaran::orderBy('mata_pelajaran_id')->get()]);
    }
    public function detil(){
        $pd = Peserta_didik::find(request()->peserta_didik_id);
        $data = [
            'pd' => $pd,
            'judul' => 'DETIL '.$pd->nama,
        ];
        return response()->json($data);
    }
}
