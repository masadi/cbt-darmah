<template>
  <div class="dropdown" v-if="options">

    <!-- Dropdown Input -->
    <input class="dropdown-input"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :class="{ 'is-invalid': state == false, 'is-valid': state == true }"
      :disabled="disabled"
      :placeholder="placeholder" />

    <!-- Dropdown Menu -->
    <div class="dropdown-content"
      v-show="optionsShown">
      <div
        class="dropdown-item"
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index">
          {{ option.nomor_seri || option.id || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
  export default {
    name: 'Dropdown',
    template: 'Dropdown',
    props: {
      name: {
        type: String,
        required: false,
        default: 'dropdown',
        note: 'Input name'
      },
      /*options: {
        type: Array,
        required: true,
        default: () => [],
        note: 'Options of dropdown. An array of options with id and name',
      },*/
      placeholder: {
        type: String,
        required: false,
        default: 'Cari nomor ijazah...',
        note: 'Placeholder of dropdown'
      },
      nomor_seri: {
        //type: String,
        required: true,
      },
      peserta_didik_id: {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
        note: 'Disable the dropdown'
      },
      state: {
        //type: Boolean,
        required: true,
        default: false,
        note: 'Disable the dropdown'
      },
      maxItem: {
        type: Number,
        required: false,
        default: 6,
        note: 'Max items showing'
      },
      tahun: {
        type: Number,
        required: false,
        default: 3,
        note: 'Max items showing'
      }
    },
    data() {
      return {
        options: [],
        selected: {},
        optionsShown: false,
        searchFilter: ''
      }
    },
    created() {
      this.getSelectedBlangko()
      this.searchFilter = this.nomor_seri;
      //this.getBlangko()
    },
    computed: {
      filteredOptions() {
        const filtered = [];
        const regOption = new RegExp(this.searchFilter, 'ig');
        console.log(regOption);
        for (const option of this.options) {
          if (this.searchFilter.length < 1 || option.nomor_seri.match(regOption)){
            if (filtered.length < this.maxItem) filtered.push(option);
          }
        }
        return filtered;
      }
    },
    methods: {
      getSelectedBlangko(){
        this.$http.post('/blangko/selected', {
          peserta_didik_id: this.peserta_didik_id
        }).then(response => {
          let getData = response.data
          if(getData.data){
            this.selected = getData.data
            this.options.push(getData.data)
          }
          this.$emit('selected', this.selected);
        }).catch(function (error) {
          console.log(error);
        })
      },
      getBlangko(urut){
        this.$http.post('/blangko/distribusi', {
          tahun: this.tahun,
          peserta_didik_id: this.peserta_didik_id,
          urut: urut
        }).then(response => {
          let getData = response.data
          this.options = getData.data
        }).catch(function (error) {
          console.log(error);
        })
      },
      selectOption(option) {
        this.selected = option;
        this.optionsShown = false;
        this.searchFilter = this.selected.nomor_seri;
        this.$emit('selected', this.selected);
      },
      showOptions(){
        if (!this.disabled) {
          this.searchFilter = '';
          this.optionsShown = true;
        }
      },
      exit() {
        if (!this.selected.id) {
          this.selected = {};
          this.searchFilter = '';
        } else {
          this.searchFilter = this.selected.nomor_seri;
        }
        this.$emit('selected', this.selected);
        this.optionsShown = false;
      },
      // Selecting when pressing Enter
      keyMonitor: _.debounce(function(event) {
        /*search: _.debounce(function (e) {
            //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
            this.$emit('search', e.target.value)
        }, 500),*/
        this.getBlangko(event.target.value)
        //if (event.key === "Enter" && this.filteredOptions[0])
          //this.selectOption(this.filteredOptions[0]);
      }, 500)
    },
    watch: {
      searchFilter() {
        if (this.filteredOptions.length === 0) {
          this.selected = {};
        } else {
          this.selected = this.filteredOptions[0];
        }
        this.$emit('filter', this.searchFilter);
      }
    }
  };
</script>


<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;
    margin: auto;
    .dropdown-input {
      background: #fff;
      cursor: pointer;
      border: 1px solid #d8d6de;
      border-radius: 0.357rem;
      color: #333;
      display: block;
      font-size: 1rem;
      padding: 0.438rem 1rem;
      width:100%;
      //min-width: 250px;
      //max-width: 250px;
      height: 2.714rem;
      &:hover {
        background: #f8f8fa;
      }
    }
    .dropdown-input.is-invalid {
      border-color: #ea5455;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ea5455' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23ea5455' stroke='none'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-size: calc(0.725em + 0.438rem) calc(0.725em + 0.438rem);
      background-position: right calc(0.3625em + 0.219rem) center;
    }
    .dropdown-input.is-valid {
      border-color: #28c76f;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328c76f' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-size: calc(0.725em + 0.438rem) calc(0.725em + 0.438rem);
      background-position: right calc(0.3625em + 0.219rem) center;
    }
    .dropdown-content {
      position: absolute;
      background-color: #fff;
      min-width: 248px;
      //max-width: 248px;
      //max-height: 248px;
      border: 1px solid #d8d6de;
      //box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
      overflow: auto;
      z-index: 1;
      .dropdown-item {
        color: black;
        font-size: 1rem;
        line-height: 1.45;
        padding: 0.438rem 1rem;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &:hover {
          background-color: #e7ecf5;
        }
      }
    }
    .dropdown:hover .dropdowncontent {
      display: block;
    }
  }
</style>