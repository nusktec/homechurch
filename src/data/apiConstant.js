/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
const SSK = 'c783aa9384f9c329678c005a28c55c95bfb62df4';
const API_URL = 'http://localhost:3000/api';
// export default
let Apis = {
  userCreate: API_URL + '/auth/create/?ssk=' + SSK,
  userLogin: API_URL + '/auth/login/?ssk=' + SSK,
  userGetter: API_URL + '/auth/user/?ssk=' + SSK,
};
export default Apis;
