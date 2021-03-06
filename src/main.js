// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSmoothScroll from 'vue-smoothscroll'

Vue.use(VueSmoothScroll)
Vue.component('icon', Icon)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAP_API_KEY,
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
