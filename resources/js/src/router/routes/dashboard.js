export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/utama/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/verifikasi-blangko',
    name: 'verifikasi-blangko',
    component: () => import('@/views/dashboard/verifikasi/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-valid',
    name: 'blangko-valid',
    component: () => import('@/views/dashboard/verifikasi/Valid.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-invalid',
    name: 'blangko-invalid',
    component: () => import('@/views/dashboard/verifikasi/Invalid.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-ijazah-diterima',
    name: 'blangko-ijazah-diterima',
    component: () => import('@/views/dashboard/blangko/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-ijazah-cadangan',
    name: 'blangko-ijazah-cadangan',
    component: () => import('@/views/dashboard/blangko/Cadangan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/pengguna-cabdin',
    name: 'pengguna-cabdin',
    component: () => import('@/views/dashboard/users/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-ijazah-diganti',
    name: 'blangko-ijazah-diganti',
    component: () => import('@/views/dashboard/blangko/Diganti.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-ijazah-dikembalikan',
    name: 'blangko-ijazah-dikembalikan',
    component: () => import('@/views/dashboard/blangko/Dikembalikan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/blangko-ijazah-dimusnahkan',
    name: 'blangko-ijazah-dimusnahkan',
    component: () => import('@/views/dashboard/blangko/Dimusnahkan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  //sekolah start
  {
    path: '/peserta-didik-aktif',
    name: 'peserta-didik-aktif',
    component: () => import('@/views/dashboard/peserta-didik/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/peserta-didik-keluar',
    name: 'peserta-didik-keluar',
    component: () => import('@/views/dashboard/peserta-didik/Keluar.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/peserta-didik-lulus',
    name: 'peserta-didik-lulus',
    component: () => import('@/views/dashboard/peserta-didik/Lulus.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/berita-acara-penerimaan',
    name: 'berita-acara-penerimaan',
    component: () => import('@/views/dashboard/berita-acara/Penerimaan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/berita-acara-penggantian',
    name: 'berita-acara-penggantian',
    component: () => import('@/views/dashboard/berita-acara/Penggantian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/berita-acara-pengembalian',
    name: 'berita-acara-pengembalian',
    component: () => import('@/views/dashboard/berita-acara/Pengembalian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/berita-acara-pendistribusian',
    name: 'berita-acara-pendistribusian',
    component: () => import('@/views/dashboard/berita-acara/Pendistribusian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/berita-acara-pemusnahan',
    name: 'berita-acara-pemusnahan',
    component: () => import('@/views/dashboard/berita-acara/Pemusnahan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/laporan/berita-acara/penerimaan',
    name: 'laporan-berita-acara-penerimaan',
    component: () => import('@/views/dashboard/berita-acara/laporan/Penerimaan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/laporan/berita-acara/penggantian',
    name: 'laporan-berita-acara-penggantian',
    component: () => import('@/views/dashboard/berita-acara/laporan/Penggantian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/laporan/berita-acara/pengembalian',
    name: 'laporan-berita-acara-pengembalian',
    component: () => import('@/views/dashboard/berita-acara/laporan/Pengembalian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/laporan/berita-acara/pendistribusian',
    name: 'laporan-berita-acara-pendistribusian',
    component: () => import('@/views/dashboard/berita-acara/laporan/Pendistribusian.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/laporan/berita-acara/pemusnahan',
    name: 'laporan-berita-acara-pemusnahan',
    component: () => import('@/views/dashboard/berita-acara/laporan/Pemusnahan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  //sekolah end
  //administrator start
  {
    path: '/rekapitulasi-wilayah',
    name: 'rekapitulasi-wilayah',
    component: () => import('@/views/dashboard/wilayah/Wilayah.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/data-sekolah',
    name: 'data-sekolah',
    component: () => import('@/views/dashboard/sekolah/Sekolah.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/provinsi/:kode_wilayah',
    name: 'table-provinsi',
    component: () => import('@/views/dashboard/wilayah/Provinsi.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  {
    path: '/kabupaten/:kode_wilayah',
    name: 'sekolah-kabupaten',
    component: () => import('@/views/dashboard/wilayah/Kabupaten.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  //administrator end
  //provinsi start
  {
    path: '/rekap-kabupaten-kota',
    name: 'rekap-kabupaten-kota',
    component: () => import('@/views/dashboard/wilayah/Provinsi.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/kab-kota/:kode_wilayah',
    name: 'kab-kota',
    component: () => import('@/views/dashboard/wilayah/Kabupaten.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
      navActiveLink: 'rekap-kabupaten-kota',
    }
  },
  //provinsi end
  {
    path: '/rekapitulasi-wilayah',
    name: 'rekap-wilayah',
    component: () => import('@/views/dashboard/wilayah/Wilayah.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/pengaduan',
    name: 'pengaduan',
    component: () => import('@/views/dashboard/pengaduan/Index.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/detil-pengaduan/:pengaduan_id',
    name: 'detil-pengaduan',
    //component: () => import('@/views/components/timeline/Timeline.vue'),
    component: () => import('@/views/dashboard/pengaduan/DetilPengaduan.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
      navActiveLink: 'pengaduan',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/dashboard/users/Profile.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/pages/authentication/Logout.vue'),
    meta: {
      resource: 'Web',
      action: 'read',
    }
  },
  {
    path: '/auth/sso',
    name: 'proses-login',
    component: () => import('@/views/pages/miscellaneous/ProsesLogin.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
]
