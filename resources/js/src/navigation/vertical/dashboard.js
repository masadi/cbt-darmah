export default [
  {
    icon: 'house',
    route: 'beranda',
    title: 'Beranda',
    resource: 'Siswa',
    action: 'read',
  },
  {
    icon: 'layer-group',
    route: 'progress-data',
    title: 'Progress Data',
    resource: 'Auth',
    action: 'read',
  },
  {
    icon: 'house',
    route: 'dashboard',
    title: 'Dashboard',
    resource: 'Web',
    action: 'read',
  },
  {
    icon: 'school-flag',
    route: 'pusdatin',
    title: 'Data Pusdatin',
    resource: 'Administrator',
    action: 'read',
  },
  {
    icon: 'layer-group',
    route: 'rekapitulasi-wilayah',
    title: 'Rekapitulasi Wilayah',
    resource: 'Administrator',
    action: 'read',
  },
  {
    icon: 'layer-group',
    route: 'rekap-wilayah',
    title: 'Rekap Wilayah',
    resource: 'Direktorat',
    action: 'read',
  },
  {
    icon: 'layer-group',
    route: 'rekap-kabupaten-kota',
    title: 'Rekap Kab/Kota',
    resource: 'Disprov',
    action: 'read',
  },
  {
    icon: 'school',
    route: 'data-sekolah',
    title: 'Data Sekolah',
    resource: 'Referensi',
    action: 'read',
  },
  {
    icon: 'list-check',
    //route: 'peserta-didik',
    title: 'Verifikasi Blangko',
    children: [
      {
        icon: 'file-circle-check',
        title: 'Belum Diverifikasi',
        route: 'verifikasi-blangko',
        resource: 'Verifikator',
        action: 'read',
      },
      {
        icon: 'file-circle-check',
        title: 'Blangko Valid',
        route: 'blangko-valid',
        resource: 'Verifikator',
        action: 'read',
      },
      {
        icon: 'file-circle-xmark',
        title: 'Blangko Invalid',
        route: 'blangko-invalid',
        resource: 'Verifikator',
        action: 'read',
      },
    ]
  },
  {
    icon: 'users',
    //route: 'peserta-didik',
    title: 'Peserta Didik',
    children: [
      {
        icon: 'user-check',
        title: 'PD Aktif',
        route: 'peserta-didik-aktif',
        resource: 'Sekolah',
        action: 'read',
      },
      {
        icon: 'user-xmark',
        title: 'PD Non Penerima',
        route: 'peserta-didik-keluar',
        resource: 'Sekolah',
        action: 'read',
      },
      {
        icon: 'user-graduate',
        title: 'PD Penerima',
        route: 'peserta-didik-lulus',
        resource: 'Sekolah',
        action: 'read',
      },
    ]
  },
  {
    icon: 'file-circle-check',
    title: 'Data Blangko Ijazah',
    children: [
      {
        icon: 'circle-check',
        title: 'Penerimaan',
        route: 'blangko-ijazah-diterima',
        resource: 'Blangko',
        action: 'read',
      },
      {
        icon: 'copy',
        title: 'Cadangan',
        route: 'blangko-ijazah-cadangan',
        resource: 'Disprov',
        action: 'read',
      },
      {
        icon: 'arrow-rotate-left',
        title: 'Penggantian',
        route: 'blangko-ijazah-diganti',
        resource: 'Sekolah',
        action: 'read',
      },
      {
        icon: 'circle-xmark',
        title: 'Pengembalian',
        route: 'blangko-ijazah-dikembalikan',
        resource: 'Sekolah',
        action: 'read',
      },
      {
        icon: 'fire',
        title: 'Pemusnahan',
        route: 'blangko-ijazah-dimusnahkan',
        resource: 'Fire',
        action: 'read',
      },
    ]
  },
  {
    icon: 'pen-to-square',
    title: 'Berita Acara',
    children: [
      {
        icon: 'circle-check',
        title: 'Penerimaan',
        route: 'berita-acara-penerimaan',
        resource: 'Blangko',
        action: 'read',
      },
      {
        icon: 'arrow-rotate-left',
        title: 'Penggantian',
        route: 'berita-acara-penggantian',
        resource: 'Blangko',
        action: 'read',
      },
      {
        icon: 'circle-xmark',
        title: 'Pengembalian',
        route: 'berita-acara-pengembalian',
        resource: 'Sekolah',
        action: 'read',
      },
      {
        icon: 'list-check',
        title: 'Pendistribusian',
        route: 'berita-acara-pendistribusian',
        resource: 'Blangko',
        action: 'read',
      },
      {
        icon: 'fire',
        title: 'Pemusnahan',
        route: 'berita-acara-pemusnahan',
        resource: 'Fire',
        action: 'read',
      },
    ]
  },
  {
    icon: 'newspaper',
    title: 'Laporan',
    children: [
      {
        icon: 'newspaper',
        title: 'Berita Acara',
        resource: 'Disprov',
        action: 'read',
        children: [
          {
            icon: 'circle-check',
            title: 'Penerimaan',
            route: 'laporan-berita-acara-penerimaan',
            resource: 'Disprov',
            action: 'read',
          },
          {
            icon: 'arrow-rotate-left',
            title: 'Penggantian',
            route: 'laporan-berita-acara-penggantian',
            resource: 'Disprov',
            action: 'read',
          },
          {
            icon: 'circle-xmark',
            title: 'Pengembalian',
            route: 'laporan-berita-acara-pengembalian',
            resource: 'Sekolah',
            action: 'read',
          },
          {
            icon: 'list-check',
            title: 'Pendistribusian',
            route: 'laporan-berita-acara-pendistribusian',
            resource: 'Disprov',
            action: 'read',
          },
          {
            icon: 'fire',
            title: 'Pemusnahan',
            route: 'laporan-berita-acara-pemusnahan',
            resource: 'Disprov',
            action: 'read',
          },
        ]
      }
    ]
  },
  {
    icon: 'users',
    route: 'pengguna-cabdin',
    title: 'Pengguna KCD',
    resource: 'Disprov',
    action: 'read',
  },
  {
    icon: 'ticket',
    route: 'pengaduan',
    title: 'Layanan Pengaduan',
    resource: 'Web',
    action: 'read',
  },
  {
    icon: 'user',
    route: 'profile',
    title: 'Profil Pengguna',
    resource: 'Web',
    action: 'read',
  },
  {
    icon: 'right-to-bracket',
    route: 'logout',
    title: 'Keluar Aplikasi',
    resource: 'Web',
    action: 'read',
    variant: 'danger',
  },
]
