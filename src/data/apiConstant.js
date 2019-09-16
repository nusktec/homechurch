/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
const SSK = 'c783aa9384f9c329678c005a28c55c95bfb62df4';
const API_URL = 'http://localhost:3000';
// export default
let Apis = {
  userCreate: API_URL + '/user/create/?ssk=' + SSK, //create new account
  userLogin: API_URL + '/user/login/?ssk=' + SSK, //login account
  userGetter: API_URL + '/user/get/?ssk=' + SSK, //get user account with token
  userUpdate: API_URL + '/user/update-acc/?ssk=' + SSK, //update user account with token
};
export default Apis;
