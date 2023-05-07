<template>
  <div>
    <b-card no-body>
      <b-card-body>
        <b-card-title class="text-center">Sedang dalam pengembangan</b-card-title>
        <b-img fluid center :src="imgUrl" alt="Coming soon page" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody, BImg } from 'bootstrap-vue'
import store from '@/store/index'

export default {
  components: {
    BCard, BCardHeader, BCardTitle, BCardBody, BImg
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/coming-soon.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/coming-soon-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
}
</script>