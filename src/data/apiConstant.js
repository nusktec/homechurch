/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
const SSK = '123456';
const API_URL = 'http://localhost:3000/api';
// export default
let Apis = {
  createUser: API_URL + '/auth/create/?ssk=' + SSK,
};
export default Apis;
