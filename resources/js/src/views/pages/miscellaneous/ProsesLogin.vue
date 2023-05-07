<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        {{app.name}} Versi {{app.version}}
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Proses Login 🔐
        </h2>
        <p class="mb-2">
          Silahkan tunggu beberapa saat. Anda akan dialihkan ke laman Beranda
        </p>
        <!--b-button variant="primary" class="mb-1 btn-sm-block" :to="loginRoute()">Back to Home</b-button-->
        <b-img fluid :src="imgUrl" alt="Not authorized page" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BLink,
    BImg,
    BButton,
    VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
      app: store.state.appConfig.app,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
    loginRoute() {
      const user = JSON.parse(localStorage.getItem('userData'))
      return getHomeRouteForLoggedInUser(user ? user.role : null)
    },
  },
  mounted() {
    this.$http.post('/auth/login-by-token', {
      access_token: this.$route.query.access_token,
    }).then(response => {
      const userData = response.data
      if(userData.user){
        localStorage.setItem('accessToken', userData.accessToken)
        localStorage.setItem('refreshToken', userData.accessToken)
        localStorage.setItem('userData', JSON.stringify(userData.user))
        this.$ability.update(userData.user.ability)
        //this.show = true
        this.$router.replace('/').then(() => {
          this.$toast({
            component: ToastificationContent,
            position: 'bottom-center',
            props: {
              title: `Selamat Datang ${userData.user.name}`,
              icon: 'CoffeeIcon',
              variant: 'success',
              text: `Anda telah berhasil masuk sebagai ${userData.user.role}. Sekarang Anda dapat mulai berselancar di Aplikasi Simazah!`,
            },
          })
        })
      } else {
        this.$router.replace({name: 'misc-not-authorized'});
      }
    });
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-misc.scss';
</style>
