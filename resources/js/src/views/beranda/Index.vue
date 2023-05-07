<template>
  <div>
    <b-row v-if="isBusy">
      <b-col>
        <b-card class="text-center">
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <div><strong>Loading...</strong></div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col>
        <b-card>
          <b-card-text>
            <h2 class="fw-bolder">SELAMAT DATANG {{data.user.name}}</h2>
            <p class="card-text">Anda anggota {{data.rombel.nama}}</p>
            <h3 class="fw-bolder">Jadwal Ujian di {{data.rombel.nama}}</h3>
            <b-table responsive striped :items="items" :fields="fields" show-empty :busy="isBusy">
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
              <template v-slot:cell(mapel)="row">
                {{row.item.pembelajaran.nama_mata_pelajaran}}
              </template>
              <template v-slot:cell(status_ujian)="row">
                <b-badge variant="success" v-if="row.item.soal_count === row.item.jawaban_siswa_count">Sudah Dilaksanakan</b-badge>
                <b-badge variant="warning" v-if="row.item.jawaban_siswa_count && row.item.soal_count < row.item.jawaban_siswa_count">Sedang Berjalan</b-badge>
                <b-badge variant="danger" v-if="!row.item.jawaban_siswa_count">Belum Dilaksanakan</b-badge>
              </template>
              <template v-slot:cell(status)="row">
                <b-badge variant="success" v-if="row.item.status">YA</b-badge>
                <b-badge variant="danger" v-else>TIDAK</b-badge>
              </template>
              <template v-slot:cell(actions)="row">
                <b-button variant="success" size="sm" v-if="row.item.status" @click="ujian(row.item)">Proses Ujian</b-button>
                <b-button variant="secondary" disabled size="sm" v-else>Proses Ujian</b-button>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!--am-charts-bar /-->
    <!--chartjs-bar-chart /-->
  </div>
</template>

<script>
import { BCard, BCardText, BRow, BCol, BSpinner, BTable, BBadge, BButton } from 'bootstrap-vue'
export default {
  components: {
    BCard, BCardText, BRow, BCol, BSpinner, BTable, BBadge, BButton
  },
  data() {
    return {
      isBusy: true,
      data: {},
      fields: [
        {
          key: 'mapel',
          label: 'Mata Pelajaran',
          thClass: 'text-center',
        },
        {
          key: 'status_ujian',
          label: 'Status Ujian',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'status',
          label: 'Aktif',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'actions',
          label: 'Aksi',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
      ],
      items: [],
    }
  },
  created() {
    console.log('created');
    this.$http.get('/general/index').then(response => {
      this.isBusy = false
      this.data = response.data
      this.items = response.data.ujian
    })
  },
  methods: {
    ujian(item){
      this.$router.replace({ name: "ujian", params: {ujian_id:item.ujian_id}, query: {nomor: 1} })
    },
  }
}
</script>