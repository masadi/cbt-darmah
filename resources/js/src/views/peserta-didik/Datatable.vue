<template>
  <div>
    <b-row>
      <b-col md="4" class="mb-2">
        <div class="form-inline">
        <!-- KETIKA SELECT BOXNYA DIGANTI, MAKA AKAN MENJALANKAN FUNGSI loadPerPage -->
          <select class="form-control" v-model="meta.per_page" @change="loadPerPage">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label class="ml-2">Entri</label>
        </div>
      </b-col>
      <b-col md="4" offset-md="4">
        <div class="form-inline float-right">
          <label class="mr-2">Cari</label>
          <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->
          <input type="text" class="form-control" @input="search">
        </div>
      </b-col>
    </b-row>
    <b-table responsive striped :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty :busy="isBusy">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(actions)="row">
        <b-dropdown id="dropdown-dropleft" dropleft text="Aksi" variant="success" size="sm">
          <b-dropdown-item href="javascript:" @click="detil(row.item)"><font-awesome-icon icon="fa-solid fa-eye" /> Pembelajaran</b-dropdown-item>
          <b-dropdown-item href="javascript:" @click="walas(row.item)"><font-awesome-icon icon="fa-solid fa-user" /> Wali Kelas</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <b-row class="mt-2">
      <b-col md="6">
        <p>Menampilkan {{ (meta.from) ? meta.from : 0 }} sampai {{ meta.to }} dari {{ meta.total }} entri</p>
      </b-col>
      <!-- BLOCK INI AKAN MENJADI PAGINATION DARI DATA YANG DITAMPILKAN -->
      <b-col md="6">
        <!-- DAN KETIKA TERJADI PERGANTIAN PAGE, MAKA AKAN MENJALANKAN FUNGSI changePage -->
        <b-pagination v-model="meta.current_page" :total-rows="meta.total" :per-page="meta.per_page" align="right" @change="changePage" aria-controls="dw-datatable"></b-pagination>
      </b-col>
    </b-row>
    <b-modal ref="my-modal" size="xl" :title="judul" ok-title="Simpan" cancel-title="Tutup" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <table class="table table-bordered">
          <thead>
            <th class="text-center">NO</th>
            <th class="text-center">Mata Pelajaran</th>
            <th class="text-center">Guru</th>
            <th class="text-center">Hapus</th>
          </thead>
          <tbody>
            <tr v-for="(mapel, index) in pembelajaran" v-if="pembelajaran.length">
              <td>{{index + 1}}</td>
              <td>{{mapel.nama_mata_pelajaran}}</td>
              <td>
                <input type="hidden" v-model="form.pembelajaran_id[mapel.pembelajaran_id]" />
                <b-form-select v-model="form.guru_id[mapel.pembelajaran_id]" :options="data_guru" value-field="guru_id" text-field="nama"></b-form-select>
              </td>
              <td>
                <b-button variant="danger" size="sm" @click="hapus(mapel.pembelajaran_id, mapel.rombongan_belajar_id)">Hapus</b-button>
              </td>
            </tr>
            <tr v-else>
              <td class="text-center" colspan="4">Tidak ada data untuk ditampilkan</td>
            </tr>
          </tbody>
        </table>
      </form>
    </b-modal>
  </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import { BRow, BCol, BTable, BSpinner, BPagination, BDropdown, BDropdownItem, BAlert, BButton, BFormSelect } from 'bootstrap-vue'
export default {
  components: {
    BRow,
    BCol,
    BTable,
    BSpinner,
    BPagination,
    BDropdown, 
    BDropdownItem,
    BAlert,
    BButton,
    BFormSelect,
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    meta: {
      required: true
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    }
  },
  data() {
    return {
      sortBy: null,
      sortDesc: false,
      judul: null,
      pembelajaran: [],
      form: {
        guru_id: {},
        pembelajaran_id: {},
      },
      data_guru: [],
    }
  },
  watch: {
    sortBy(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    },
    sortDesc(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    }
  },
  methods: {
    detil(item){
      console.log(item);
      this.$http.post('/rombongan-belajar/pembelajaran', {
        rombongan_belajar_id: item.rombongan_belajar_id
      }).then(response => {
        let getData = response.data
        this.pembelajaran = getData.data
        this.pembelajaran.forEach((value, index) => {
            this.form.pembelajaran_id[value.pembelajaran_id] = value.pembelajaran_id
            this.form.guru_id[value.pembelajaran_id] = value.guru_id
        });
        this.judul = getData.judul
        this.data_guru = getData.guru
        this.$refs['my-modal'].show()
      });
    },
    handleOk(bvModalEvent){
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit(){
      console.log('handleSubmit');
      this.$http.post('/rombongan-belajar/simpan-pembelajaran', {
        form: this.form
      }).then(response => {
        let data = response.data
        this.$swal({
          icon: data.icon,
          title: data.title,
          text: data.text,
          customClass: {
            confirmButton: 'btn btn-success',
          },
        }).then(result => {
          this.$refs['my-modal'].hide()
        })
      })
    },
    hapus(pembelajaran_id, rombongan_belajar_id){
      this.$swal({
        title: 'Apakah Anda yakin?',
        text: "Aksi ini akan menggenerate pengguna Satuan Pendidikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.$http.post('/rombongan-belajar/hapus-pembelajaran', {
            pembelajaran_id: pembelajaran_id,
            rombongan_belajar_id: rombongan_belajar_id,
          }).then(response => {
            let data = response.data
            this.$swal({
              icon: data.icon,
              title: data.title,
              text: data.text,
              customClass: {
                confirmButton: 'btn btn-success',
              },
            }).then(result => {
              this.pembelajaran = data.pembelajaran
            })
          });
        }
      })
    },
    walas(item){
      this.$swal({
        title: 'Apakah Anda yakin?',
        text: "Aksi ini akan menggenerate pengguna Satuan Pendidikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.$http.post('/referensi/generate-pengguna', {
            sekolah_id: item.sekolah_id
          }).then(response => {
            let data = response.data
            this.$swal({
              icon: data.icon,
              title: data.title,
              text: data.text,
              customClass: {
                confirmButton: 'btn btn-success',
              },
            }).then(result => {
              this.loadPerPage(10);
            })
          });
        }
      })
    },
    loadPerPage(val) {
      this.$emit('per_page', this.meta.per_page)
    },
    changePage(val) {
      this.$emit('pagination', val)
    },
    search: _.debounce(function (e) {
      this.$emit('search', e.target.value)
    }, 500),
  },
}
</script>
<style lang="scss">
@import '~@resources/scss/vue/libs/vue-sweetalert.scss';
</style>