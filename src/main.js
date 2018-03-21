// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import Vue2Filters from 'vue2-filters'
import VueTouch from 'vue-touch'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(Vue2Filters)
Vue.use(VueTouch, {
  name: 'v-touch'
})

var vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

vue()
