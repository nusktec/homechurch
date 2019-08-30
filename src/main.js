/* eslint-disable */
import axios from 'axios';
import VueAxios from 'vue-axios';

import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';
import store from './store';

ShardsVue.install(Vue);
//use axios library here
Vue.use(VueAxios, axios);

//Begin configurations
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
