/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import api from './apiCaller';

export default {
  install(Vue, opt) {
    Vue.prototype.$Api = api;
  }
};
