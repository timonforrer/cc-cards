// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import Vue2Filters from 'vue2-filters'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(Vue2Filters)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
