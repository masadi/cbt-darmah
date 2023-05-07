<template>
  <div>
    <b-card class="text-center" v-if="isBusy">
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <div><strong>Loading...</strong></div>
      </div>
    </b-card>
    <b-card v-if="!isBusy">
      <b-card-text class="text-center">
        <Countdown :end="yourEndDate"></Countdown>
      </b-card-text>
    </b-card>
    <b-row v-if="!isBusy">
      <b-col cols="8">
        <b-card>
          <b-card-text>
            <h5 v-html="data.deskripsi"></h5>
            <b-form-group v-slot="{ ariaDescribedby }">
              <template v-for="(jawaban, index) in data.jawaban">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" :value="jawaban.opsi"><h5 v-html="jawaban.deskripsi"></h5></b-form-radio>
              </template>
            </b-form-group>
            <b-row>
              <b-col lg="4">
                <b-button v-if="nomor <= 1">&laquo; Sebelumnya</b-button>
                <b-button v-else @click="lanjut(data.soal_id, nomor, 'prev')" variant="success">&laquo; Sebelumnya</b-button>
              </b-col>
              <b-col lg="4" class="text-center">
                <b-form-checkbox v-model="ragu" name="check-button" button :button-variant="button_ragu" @change="getRagu">
                  Ragu
                </b-form-checkbox>
              </b-col>
              <b-col lg="4" class="text-right">
                <b-button v-if="nomor == jumlah_soal" variant="danger">Selesai</b-button>
                <b-button v-else @click="lanjut(data.soal_id, nomor, 'next')" variant="success">Selanjutnya &raquo;</b-button>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <b-card-text>
            navigasi
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Countdown from './Countdown.vue'
import { BCard, BCardText, BRow, BCol, BSpinner, BTable, BBadge, BButton, BFormGroup, BFormRadio, BFormCheckbox } from 'bootstrap-vue'
export default {
  components: {
    BCard, BCardText, BRow, BCol, BSpinner, BTable, BBadge, BButton, BFormGroup, BFormRadio, BFormCheckbox, Countdown
  },
  data() {
    return {
      isBusy: true,
      data: {},
      selected: '',
      ragu: false,
      button_ragu: 'secondary',
      nomor: 0,
      ujian_id: '',
      jumlah_soal: 0,
      yourEndDate: 0,
    }
  },
  created() {
    //console.log('created');
    //console.log(this.$route.params);
    this.selected = ''
    this.ragu = false
    this.button_ragu = 'secondary'
    /*var today = new Date();
    //var d = new Date(today.setHours(today.getHours() + 2));
    var d = this.addMinutes(today, 120)
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    let h = d.getHours();
    let i = d.getMinutes();
    let s = d.getSeconds();
    //console.log(today);
    //console.log(d);
    console.log(d);
    this.yourEndDate = this.setDate(d)
    //month+' '+day+', '+ year+' '+h+':'+i+':'+s//'August 22, 2023 12:22:12'*/
    this.getwaktu(this.$route.params.ujian_id)
    this.getSoal(this.$route.params.ujian_id, this.$route.query.nomor, false)
  },
  methods: {
    getwaktu(ujian_id){
      this.$http.post('/ujian/waktu', {
        ujian_id: ujian_id,
      }).then(response => {
        let getData = response.data
        if(getData){
          var today = new Date();
          var d = this.addMinutes(today, getData)
          this.yourEndDate = this.setDate(d)
        }
      })
    },
    setDate(d){
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let month = months[d.getMonth()];
      let day = d.getDate();
      let year = d.getFullYear();
      let h = d.getHours();
      let i = d.getMinutes();
      let s = d.getSeconds();
      return month+' '+day+', '+ year+' '+h+':'+i+':'+s
    },
    getSoal(ujian_id, nomor, replace){
      this.$http.post('/ujian/index', {
        ujian_id: ujian_id,
        nomor: nomor,
      }).then(response => {
        let getData = response.data
        this.isBusy = false
        this.data = getData.soal
        this.nomor = nomor
        this.ujian_id = ujian_id
        this.jumlah_soal = getData.ujian.soal_count
        if(getData.soal.jawaban_siswa){
          console.log(getData.soal.jawaban_siswa.is_ragu);
          this.selected = getData.soal.jawaban_siswa.opsi
          this.ragu = (getData.soal.jawaban_siswa.is_ragu) ? true : false
          this.button_ragu = (getData.soal.jawaban_siswa.is_ragu) ? 'warning' : 'secondary'
        }
        /*if(getData.ujian.ujian_siswa){
          var today = new Date();
          var d = this.addMinutes(today, getData.ujian.ujian_siswa.waktu)
          this.yourEndDate = this.setDate(d)
        }*/
        if(replace){
          this.$router.replace({ name: "ujian", params: {ujian_id:this.$route.params.ujian_id}, query: {nomor: nomor} })
        }
      })
    },
    lanjut(soal_id, nomor, nav){
      this.isBusy = true
      var nomor_ujian;
      if(nav == 'prev'){
        nomor_ujian = parseInt(nomor) - 1;
      } else {
        nomor_ujian = parseInt(nomor) + 1;
      }
      this.$http.post('/ujian/simpan', {
        ujian_id: this.ujian_id,
        soal_id: soal_id,
        jawaban: this.selected,
        ragu: this.ragu,
        waktu: this.yourEndDate,
      }).then(response => {
        this.getSoal(this.$route.params.ujian_id, nomor_ujian, true)
      })
    },
    getRagu(val){
      if(val){
        this.button_ragu = 'warning'
      } else {
        this.button_ragu = 'secondary'
      }
    },
    addMinutes(date, minutes) {
      date.setMinutes(date.getMinutes() + minutes);
      return date;
    },
  }
}
</script>