<template>
  <div>
    <b-card class="text-center" v-if="isBusy">
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <div><strong>Loading...</strong></div>
      </div>
    </b-card>
    <b-card no-body v-else>
      <b-card-header>
        <b-card-title>Statistik Progress Data</b-card-title>
      </b-card-header>
      <b-card-body>
        <chartjs-component-horizontal-bar-chart :height="2000" :data="chartjsData.data" :options="chartjsData.options" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardTitle, BCardSubTitle, BSpinner } from 'bootstrap-vue'
import ChartjsComponentHorizontalBarChart from './charts-components/ChartjsComponentHorizontalBarChart.vue'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BCardSubTitle,
    BSpinner,
    ChartjsComponentHorizontalBarChart,
  },
  data() {
    return {
      isBusy: true,
      chartjsData: [],
    }
  },
  created() {
    this.$http.get('/general/chart').then(response => {
      this.isBusy = false
      //console.log(response.data);
      this.chartjsData = response.data
    })
  }
}
</script>
