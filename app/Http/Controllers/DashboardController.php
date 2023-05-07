<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Mst_wilayah;
use App\Models\Sekolah;
use App\Models\Rekapitulasi;
use App\Models\kategori;
use App\Models\Sync_log;
use App\Models\Peserta_didik;
use App\Models\Blangko;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

class DashboardController extends Controller
{
   public function index()
   {
      $sp_pd = 0;
      $pd = 0;
      $sp = 0;
      $pd_3_tahun = 0;
      $pd_4_tahun = 0;
      if($this->loggedUser()->hasRole('sekolah')){
         $pd_3_tahun = Peserta_didik::where(function($query){
            $query->whereHas('sekolah', function($query){
               $query->has('temp');
               $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
            });
            $query->where('tahun', 3);
         })->count();
         $pd_4_tahun = Peserta_didik::where(function($query){
            $query->whereHas('sekolah', function($query){
               $query->has('temp');
               $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
            });
            $query->where('tahun', 4);
         })->count();
      } else {
         $sp_pd = Sekolah::has('pd')->count();
         $sp = Sekolah::where(function($query){
            if($this->loggedUser()->hasRole('disprov')){
               $query->whereHas('provinsi', function($query){
                  $query->where('provinsi_id', $this->loggedUser()->kode_wilayah);
               });
            }
            if($this->loggedUser()->hasRole('diskab')){
               $query->whereHas('kabupaten', function($query){
                  $query->whereIn('kabupaten_id', $this->loggedUser()->kcd->pluck('kode_wilayah'));
               });
            }
            if($this->loggedUser()->hasRole('sekolah')){
               $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
            }
            $query->has('temp');
         })->count();
         $pd = Peserta_didik::where(function($query){
            $query->whereHas('sekolah', function($query){
               $query->has('temp');
               if($this->loggedUser()->hasRole('disprov')){
                  $query->whereHas('provinsi', function($query){
                     $query->where('provinsi_id', $this->loggedUser()->kode_wilayah);
                  });
               }
               if($this->loggedUser()->hasRole('diskab')){
                  $query->whereHas('kabupaten', function($query){
                     $query->whereIn('kabupaten_id', $this->loggedUser()->kcd->pluck('kode_wilayah'));
                  });
               }
               if($this->loggedUser()->hasRole('sekolah')){
                  $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
               }
            });
         })->count();
      }
      $blangko_3 = Blangko::where(function($query){
         $query->whereHas('sekolah', function($query){
            $query->has('temp');
         });
         $query->where('tahun', 3);
         if($this->loggedUser()->hasRole('disprov')){
            $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
         }
         if($this->loggedUser()->hasRole('diskab')){
            $query->whereIn('kode_wilayah', $this->loggedUser()->kcd->pluck('kode_wilayah'));
         }
         if($this->loggedUser()->hasRole('sekolah')){
            $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
         }
      })->count();
      $blangko_4 = Blangko::where(function($query){
         $query->whereHas('sekolah', function($query){
            $query->has('temp');
         });
         $query->where('tahun', 4);
         if($this->loggedUser()->hasRole('disprov')){
            $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
         }
         if($this->loggedUser()->hasRole('diskab')){
            $query->whereIn('kode_wilayah', $this->loggedUser()->kcd->pluck('kode_wilayah'));
         }
         if($this->loggedUser()->hasRole('sekolah')){
            $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
         }
      })->count();
      $data = [
         'sp_pd' => number_format($sp_pd, 0, '.', '.'),
         'sp' => number_format($sp, 0, '.', '.'),
         'pd' => number_format($pd, 0, '.', '.'),
         'pd_3_tahun' => number_format($pd_3_tahun, 0, '.', '.'),
         'pd_4_tahun' => number_format($pd_4_tahun, 0, '.', '.'),
         'blangko_3' => number_format($blangko_3, 0, '.', '.'),
         'blangko_4' => number_format($blangko_4, 0, '.', '.'),
      ];
      return response()->json($data);
   }
   public function cp(){
      $data = User::with(['roles'])->where(function($query){
         if($this->loggedUser()->hasRole('administrator') || $this->loggedUser()->hasRole('verifikator')){
            $query->whereRoleIs(['disprov']);
         }
         if($this->loggedUser()->hasRole('disprov')){
            $query->whereRoleIs(['diskab']);
            /*$query->whereHas('provinsi', function($query){
               $query->where('mst_kode_wilayah', $this->loggedUser()->kode_wilayah);
            });*/
            $query->whereHas('kcd', function($query){
               $query->whereHas('wilayah', function($query){
                   $query->whereHas('parent', function($query){
                       $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
                   });
               });
            });
            $query->orWhereRoleIs(['disprov']);
            $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
         }
         if($this->loggedUser()->hasRole('diskab')){
            $query->whereRoleIs(['disprov']);
            $query->whereHas('provinsi', function($query){
               $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
            });
            $query->orWhereRoleIs(['diskab']);
            $query->whereHas('kabupaten', function($query){
               $query->where('kode_wilayah', $this->loggedUser()->kode_wilayah);
            });
         }
         if($this->loggedUser()->hasRole('sekolah')){
            $query->whereRoleIs(['disprov']);
            $query->whereHas('provinsi', function($query){
               $query->where('kode_wilayah', $this->loggedUser()->sekolah->provinsi_id);
            });
            $query->orWhereRoleIs(['diskab']);
            $query->whereHas('kcd', function($query){
               $query->whereHas('wilayah', function($query){
                  $query->where('kode_wilayah', $this->loggedUser()->sekolah->kabupaten_id);
               });
            });
            /*$query->whereHas('kabupaten', function($query){
               $query->where('kode_wilayah', $this->loggedUser()->sekolah->kabupaten_id);
            });*/
         }
      })->orderBy('kode_wilayah')->orderBy('name')->get();
      return response()->json($data);
   }
   public function administrator(){
      $sp = Sekolah::where(function($query){
         if($this->loggedUser()->hasRole('disprov')){
            $query->whereHas('provinsi', function($query){
               $query->where('provinsi_id', $this->loggedUser()->kode_wilayah);
            });
         }
         if($this->loggedUser()->hasRole('diskab')){
            $query->whereHas('kabupaten', function($query){
               $query->where('kabupaten_id', $this->loggedUser()->kode_wilayah);
            });
         }
         if($this->loggedUser()->hasRole('sekolah')){
            $query->where('sekolah_id', $this->loggedUser()->sekolah_id);
         }
      })->count();
      $data = [
         'sp' => number_format($sp, 0, '.', '.'),
      ];
      //number_format(10, 0, '.', '.')-
      return response()->json($data);
   }
   private function loggedUser(){
      return auth()->user();
   }
   public function wilayah(Request $request)
   {
      $wilayah = Mst_wilayah::whereRaw("TRIM(kode_wilayah) = '".request()->route('kode_wilayah')."'")->first();
      $data = [
         'nama' => $wilayah->nama,
         'all_wilayah' => Mst_wilayah::whereRaw("TRIM(mst_kode_wilayah) = '" . request()->route('kode_wilayah') . "'")->withCount([
            'sekolah_kabupaten as nasional',
            'sekolah_kabupaten as pengguna' => function ($query) {
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'sekolah_kabupaten as negeri_nasional' => function ($query) {
               $query->where('status_sekolah', 1);
            },
            'sekolah_kabupaten as swasta_nasional' => function ($query) {
               $query->where('status_sekolah', 2);
            },
            'sekolah_kabupaten as negeri_pengguna' => function ($query) {
               $query->where('status_sekolah', 1);
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'sekolah_kabupaten as swasta_pengguna' => function ($query) {
               $query->where('status_sekolah', 2);
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'pd_kabupaten as total_pd'
         ])->orderBy('kode_wilayah')->get(),
      ];
      return response()->json($data);
   }
   public function provinsi(){
      $data = [
         'all_wilayah' => Mst_wilayah::withCount([
            'sekolah_provinsi as nasional',
            'sekolah_provinsi as pengguna' => function ($query) {
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'sekolah_provinsi as negeri_nasional' => function ($query) {
               $query->where('status_sekolah', 1);
            },
            'sekolah_provinsi as swasta_nasional' => function ($query) {
               $query->where('status_sekolah', 2);
            },
            'sekolah_provinsi as negeri_pengguna' => function ($query) {
               $query->where('status_sekolah', 1);
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'sekolah_provinsi as swasta_pengguna' => function ($query) {
               $query->where('status_sekolah', 2);
               $query->whereHas('blangko', function($query){
                  $query->where('status', '<>', 0);
               });
            },
            'pd_provinsi as total_pd'
         ])->whereNotNull('kode_dagri')->where('id_level_wilayah', 1)->orderBy('kode_wilayah')->get(),
      ];
      return response()->json($data);
   }
   public function data_sekolah(){
      $wilayah = Mst_wilayah::whereRaw("TRIM(kode_wilayah) = '".request()->route('kode_wilayah')."'")->first();
      $data = Sekolah::withCount([
         'blangko as blangko_3' => function($query){
            $query->where('tahun', 3);
            $query->where('status', '<>', 0);
         },
         'blangko as blangko_4' => function($query){
            $query->where('tahun', 4);
            $query->where('status', '<>', 0);
         },
         'pd as pd_3' => function($query){
            $query->where('tahun', 3);
         },
         'pd as pd_4' => function($query){
            $query->where('tahun', 4);
         },
         'pd as penerima_3' => function($query){
            $query->where('tahun', 3);
            $query->whereHas('pd_keluar', function($query){
               $query->where('jenis_keluar_id', 1);
            });
         },
         'pd as penerima_4' => function($query){
            $query->where('tahun', 4);
            $query->whereHas('pd_keluar', function($query){
               $query->where('jenis_keluar_id', 1);
            });
         },
         'pd as terima_3' => function($query){
            $query->where('tahun', 3);
            $query->whereHas('pd_keluar', function($query){
               $query->where('jenis_keluar_id', 1);
            });
            $query->has('blangko');
         },
        'pd as terima_4' => function($query){
            $query->where('tahun', 4);
            $query->whereHas('pd_keluar', function($query){
               $query->where('jenis_keluar_id', 1);
            });
            $query->has('blangko');
         }
         ])->whereRaw("TRIM(kabupaten_id) = '".request()->route('kode_wilayah')."'")
         ->orderBy('status_sekolah')->orderBy('nama')
         ->when(request()->q, function($query) {
            $query->where('nama', 'ilike', '%'.request()->q.'%');
            $query->whereRaw("TRIM(kabupaten_id) = '".request()->route('kode_wilayah')."'");
            $query->orWhere('npsn', 'ilike', '%'.request()->q.'%');
            $query->whereRaw("TRIM(kabupaten_id) = '".request()->route('kode_wilayah')."'");
         })
         ->paginate(request()->per_page);
      return response()->json([
         'nama' => $wilayah->nama,
         'data' => $data,
      ]);
   }
   public function faqData(){
      $data = Kategori::with(['faq'])
      ->orderBy('id')
      ->when(request()->q, function($query) {
         $query->where('title', 'ILIKE', '%' . request()->q . '%');
         $query->orWhere('deskripsi', 'ILIKE', '%' . request()->q . '%');
         $query->orWhereHas('faq', function($query){
            $query->where('question', 'ILIKE', '%' . request()->q . '%');
            //$query->orWhere('answer', 'ILIKE', '%' . request()->q . '%');
         });
      })->get()->keyBy('slug');
      return response()->json($data);
   }
   public function unduhan(){
      $data = [
         'header' => [],
         'changelog' => view('changelog')->render(),
      ];
      return response()->json($data);
   }
   public function terbanyak(){
      $data = Sekolah::with(['provinsi' => function($query){
         $query->select('kode_wilayah', 'nama');
      }])
      ->select(DB::raw('ROUND(SUM(sinkron) * 100 / count(*)::numeric, 2) as persentase, SUM(sinkron) as pengguna, count(*) as nasional, provinsi_id'))
      ->where(function($query){
         $query->whereHas('provinsi', function($query){
            $query->whereNotNull('kode_dagri');
         });
      })->groupBy('provinsi_id')->orderByRaw('persentase DESC')->first();
      /*Sekolah::with(['provinsi' => function($query){
         $query->select('kode_wilayah', 'nama');
      }])
      ->select(DB::raw('SUM(sinkron) as jml, provinsi_id'))
      ->where('sinkron', 1)->groupBy('provinsi_id')->orderByRaw('SUM(sinkron) DESC')->first();*/
      return response()->json($data);
   }
   public function statistik(){
      $sekolah = Sekolah::where('sinkron', 1)->orderBy('last_sync', 'desc')->first();
      $data = [
         'last_sync' => $sekolah->updated_at->diffForHumans(),
         "statistik" => [
            [
               'id' => 1,
               "icon" => "building-columns",
               "color" => "light-primary",
               "title" => number_format(Sekolah::where('status_sekolah', 1)->count(), 0, '.', '.'),
               "subtitle" => "SMK Negeri",
               "customClass" => "mb-2 mb-xl-0"
            ],
            [
               'id' => 2,
               "icon" => "building-columns",
               "color" => "light-info",
               "title" => number_format(Sekolah::where('status_sekolah', 2)->count(), 0, '.', '.'),
               "subtitle" => "SMK Swasta",
               "customClass" => "mb-2 mb-xl-0"
            ],
            [
               'id' => 3,
               "icon" => "house",
               "color" => "light-danger",
               "title" => number_format(Sekolah::where('status_sekolah', 1)->where('sinkron', 1)->count(), 0, '.', '.'),
               "subtitle" => "SMK Negeri Pengguna",
               "customClass" => "mb-2 mb-sm-0"
            ],
            [
               'id' => 4,
               "icon" => "house",
               "color" => "light-success",
               "title" => number_format(Sekolah::where('status_sekolah', 2)->where('sinkron', 1)->count(), 0, '.', '.'),
               "subtitle" => "SMK Swasta Pengguna",
               "customClass" => ""
            ]
         ],
      ];
      return response()->json($data);
   }
   public function rekapitulasi(){
      $nama_wilayah = [];
      $smk_nasional = [];
      $smk_pengguna = [];
      $all_wilayah = Mst_wilayah::withCount([
         'sekolah_provinsi as nasional',
         'sekolah_provinsi as pengguna' => function ($query) {
            $query->has('blangko');
         },
         'sekolah_provinsi as negeri_nasional' => function ($query) {
            $query->where('status_sekolah', 1);
         },
         'sekolah_provinsi as swasta_nasional' => function ($query) {
            $query->where('status_sekolah', 2);
         },
         'sekolah_provinsi as negeri_pengguna' => function ($query) {
            $query->where('status_sekolah', 1);
            $query->has('blangko');
         },
         'sekolah_provinsi as swasta_pengguna' => function ($query) {
            $query->where('status_sekolah', 2);
            $query->has('blangko');
         },
      ])->where('id_level_wilayah', 1)->whereNotNull('kode_dagri')->orderBy('kode_wilayah')->get();
      foreach($all_wilayah as $wilayah){
         $nama_wilayah[] = $wilayah->nama;
         $smk_nasional[] = $wilayah->nasional;
         $smk_pengguna[] = $wilayah->pengguna;
      }
      $data = [
         "chartOptionsLg" => [
            "chart" => [
               "type" => "bar",
               "height" => 350,
            ],
            'plotOptions' => [
               'bar' => [
                  'horizontal' => false,
                  'columnWidth' => '55%',
                  'endingShape' => 'rounded'
               ],
            ],
            'dataLabels' => [
               'enabled' => false
            ],
            'stroke' => [
               'show' => true,
               'width' => 2,
               'colors' => ['transparent']
            ],
            "xaxis" => [
               "categories" => $nama_wilayah,
               "labels" => [
                  "style" => [
                     "colors" => "#6E6B7B",
                     "fontSize" => "0.86rem",
                     "fontFamily" => "Montserrat"
                  ]
               ],
            ],
            "yaxis" => [
               "labels" => [
                  "style" => [
                     "colors" => "#6E6B7B",
                     "fontSize" => "0.86rem",
                     "fontFamily" => "Montserrat"
                  ]
               ]
            ],
            'fill' => [
               'opacity' => 1,
            ],
         ],
         "chartOptionsSm" => [
            "chart" => [
               "type" => "bar",
               "height" => 350,
            ],
            'plotOptions' => [
               'bar' => [
                  'horizontal' => true,
                  'columnWidth' => '55%',
                  'endingShape' => 'rounded'
               ],
            ],
            'dataLabels' => [
               'enabled' => false
            ],
            'stroke' => [
               'show' => true,
               'width' => 2,
               'colors' => ['transparent']
            ],
            "xaxis" => [
               "categories" => $nama_wilayah,
               "labels" => [
                  "style" => [
                     "colors" => "#6E6B7B",
                     "fontSize" => "0.86rem",
                     "fontFamily" => "Montserrat"
                  ]
               ],
            ],
            "yaxis" => [
               "labels" => [
                  "style" => [
                     "colors" => "#6E6B7B",
                     "fontSize" => "0.86rem",
                     "fontFamily" => "Montserrat"
                  ]
               ]
            ],
            'fill' => [
               'opacity' => 1,
            ],
         ],
         'categories' => $nama_wilayah,
         "series" => [
            [
               "name" => "SMK Nasional",
               "data" => $smk_nasional,
            ],
            [
               "name" => "SMK Pengguna",
               "data" => $smk_pengguna,
            ]
         ]
      ];
      return response()->json($data);
   }
   public function pengguna(){
      $data_provinsi = Sekolah::with(['provinsi' => function($query){
         $query->select('kode_wilayah', 'nama');
      }])
      ->select(DB::raw('ROUND(SUM(sinkron) * 100 / count(*)::numeric, 2) as jml, provinsi_id'))
      ->where(function($query){
         $query->whereHas('provinsi', function($query){
            $query->whereNotNull('kode_dagri');
         });
      })->groupBy('provinsi_id')->orderByRaw('jml DESC')->take(5)->get();
      //dd($data_provinsi);
      $provinsiData = [];
      $color = ['#7367f0', '#ff9f43', '#82868b', '#00cfe8', '#ea5455'];
      foreach ($data_provinsi as $provinsi) {
         $provinsiData[] = [
            'id' => trim($provinsi->provinsi_id),
            'img' => '/img/logo-provinsi/' . trim($provinsi->provinsi_id) . '.svg',
            'nama' => $provinsi->provinsi->nama,
            'jml' => $provinsi->jml,//number_format($provinsi->jml, 0, '.', '.'),
         ];
      }
      $sekolah = Sekolah::where('sinkron', 1)->orderBy('last_sync', 'desc')->first();
      $data = [
         'last_sync' => $sekolah->updated_at->diffForHumans(),
         'wilayah' => $provinsiData,
      ];
      return response()->json($data);
   }
   public function persentase(){
      $total_sekolah = Sekolah::count();
      $sekolah_sync = Sekolah::where('sinkron', 1)->count();
      $data = [
         "completed" => number_format($total_sekolah, 0, '.', '.'),
         "inProgress" => number_format($sekolah_sync, 0, '.', '.'),
         "series" => [
            number_format(($sekolah_sync / $total_sekolah * 100), 0, '.', '.')
         ]
      ];
      return response()->json($data);
   }
   public function sinkronisasi(){
      $i = 1;
      $sinkronisasi = [];
	  $sync_log = Sync_log::
	  selectRaw('SUM(jml) as total, tanggal')
	  ->whereBetween('tanggal', [Carbon::now()->subDays(6)->format('Y-m-d'), now()->format('Y-m-d')])
	  ->groupBy('tanggal')
	  ->orderBy('tanggal', 'desc')->get();
      foreach($sync_log as $sync){
         $sinkronisasi[] = [
            'no' => $i,
            'tanggal' => Carbon::parse($sync->tanggal)->translatedFormat('d F Y'),
            'jml' => $sync->total,
         ];
         $i++;
      }
      return response()->json($sinkronisasi);
   }
   public function no_access(){
      abort(403, 'Akses tidak sah!');
   }
}