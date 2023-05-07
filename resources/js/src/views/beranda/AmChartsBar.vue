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
        <am-chart-bar-component :data="chartjsData.data" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardBody, BCardHeader, BCardTitle, BCardSubTitle, BSpinner } from 'bootstrap-vue'
import AmChartBarComponent from './charts-components/AmChartBarComponent.vue'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BCardSubTitle,
    BSpinner,
    AmChartBarComponent,
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
      this.chartjsData = response.data
    })
  }
}
</script>
