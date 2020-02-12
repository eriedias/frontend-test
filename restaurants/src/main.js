import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import VueGeolocation from 'vue-browser-geolocation';

import router from './router/index.js'
import './styles/styles.scss'

Vue.config.productionTip = false

Vue.use(VueGeolocation);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
