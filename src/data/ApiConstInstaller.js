/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import apiCons from './apiConstant';

export default {
  install(Vue) {
    Vue.prototype.$ApiCons = apiCons;
  }
};
