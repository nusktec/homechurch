/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import vueHeadful from 'vue-headful';
import vueTopProgress from 'vue-top-progress';
import Notifications from 'vue-notification';
import vueCountryRegionSelect from 'vue-country-region-select';
import VModal from 'vue-js-modal';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';
import store from './store';
import Api from './data/ApiInstaller';
import ApiCons from './data/ApiConstInstaller';

ShardsVue.install(Vue);
Vue.use(VueAxios, axios); //use axios library here
Vue.use(vueHeadful, { component: true }); // use vue-head-full for meta
Vue.use(vueTopProgress); //use top progressbar
Vue.use(Notifications); //use notifications
Vue.use(vueCountryRegionSelect); //use region selection
Vue.use(Api, { ctx: this }); //use api global
Vue.use(ApiCons); //use constant
Vue.use(VModal); //use for modal calls
//Begin configurations
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
