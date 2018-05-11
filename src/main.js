// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import IdleVue from 'idle-vue'

Vue.config.productionTip = false

const eventsHub = new Vue()

Vue.use(VueFire)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 30000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
