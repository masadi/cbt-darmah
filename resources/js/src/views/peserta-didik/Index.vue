<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>
        <h2>Data Peserta Didik</h2>
      </b-card-title>
    </b-card-header>
    <b-card-body>
      <datatable :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" @nilai="handleNilai" />
    </b-card-body>
    <b-modal title="Unduh Nilai" v-model="modalShow" @hidden="resetModal" @ok="handleOk" ok-title="Unduh">
      <b-form-select v-model="mata_pelajaran_id" :options="mapel" text-field="nama" value-field="mata_pelajaran_id" @change="changeMapel">
        <template #first>
          <b-form-select-option :value="null" disabled>-- Pilih Mata Pelajaran --</b-form-select-option>
        </template>
      </b-form-select>
      <template #modal-footer="{ ok, cancel }">
        <b-button variant="danger" @click="cancel()">Batal</b-button>
        <b-button variant="success" @click="ok()" :disabled="isDisabled">Unduh</b-button>
      </template>
    </b-modal>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody, BFormSelect, BButton, BFormSelectOption } from 'bootstrap-vue'
import Datatable from './Datatable.vue' //IMPORT COMPONENT DATATABLENYA
export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    Datatable,
    BFormSelect,
    BButton,
    BFormSelectOption,
  },
  data() {
    return {
      isDisabled: true,
      modalShow: false,
      isBusy: true,
      fields: [
        {
          key: 'nama',
          label: 'Nama',
          sortable: true,
          thClass: 'text-center',
        },
        {
          key: 'nisn',
          label: 'NISN',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'kelas',
          label: 'Kelas',
          sortable: true,
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
      meta: {},
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'nama', //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING
      peserta_didik_id: null,
      mata_pelajaran_id: null,
      mapel: [],
    }
  },
  created() {
    this.loadPostsData()
  },
  methods: {
    resetModal(){
      this.peserta_didik_id = null
      this.mata_pelajaran_id = null
    },
    loadPostsData() {
      //let current_page = this.search == '' ? this.current_page : this.current_page != 1 ? 1 : this.current_page
      let current_page = this.current_page//this.search == '' ? this.current_page : 1
      //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
      this.$http.get('/peserta-didik', {
        params: {
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(response => {
        //this.items = response.data.all_pd
        let getData = response.data.data
        this.mapel = response.data.mapel
        this.isBusy = false
        this.items = getData.data//MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
        this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
        }
      })
    },
    //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
    handlePerPage(val) {
      this.per_page = val //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
      this.loadPostsData() //DAN REQUEST DATA BARU KE SERVER
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination(val) {
      this.current_page = val //SET CURRENT PAGE YANG AKTIF
      this.loadPostsData()
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch(val) {
      this.search = val //SET VALUE PENCARIAN KE VARIABLE SEARCH
      this.loadPostsData() //REQUEST DATA BARU
    },
    //JIKA ADA EMIT SORT
    handleSort(val) {
      if (val.sortBy) {
        this.sortBy = val.sortBy
        this.sortByDesc = val.sortDesc
        this.loadPostsData() //DAN LOAD DATA BARU BERDASARKAN SORT
      }
    },
    handleNilai(val){
      console.log(val);
      this.peserta_didik_id = val
      this.modalShow = true
    },
    handleOk(bvModalEvent){
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit(){
      this.modalShow = false
      window.open(`/downloads/nilai/${this.peserta_didik_id}/${this.mata_pelajaran_id}`, '_blank')
    },
    changeMapel(val){
      this.isDisabled = true
      if(val){
        this.isDisabled = false
      }
    }
  },
}
</script>