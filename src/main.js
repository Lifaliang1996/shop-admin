import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import axios from './utils/axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui';
import './assets/css/element-variables.scss';

import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
