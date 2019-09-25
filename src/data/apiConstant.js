/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
const SSK = 'c783aa9384f9c329678c005a28c55c95bfb62df4';
const API_URL = 'http://localhost:3000';
//const API_URL = 'http://hmcapi.churcha2z.org/';
// export default
let Apis = {
  APP_URL: API_URL,
  appFile: {
    userAvatar: API_URL + '/user/update-avatar/?ssk=' + SSK, //create new account
  },
  userCreate: API_URL + '/user/create/?ssk=' + SSK, //create new account
  userLogin: API_URL + '/user/login/?ssk=' + SSK, //login account
  userGetter: API_URL + '/user/get/?ssk=' + SSK, //get user account with token
  userUpdate: API_URL + '/user/update-acc/?ssk=' + SSK, //update user account with token
  userUpdateDp: API_URL + '/user/update-dp/?ssk=' + SSK, //update user account with token
  userUpdatePass: API_URL + '/user/update-psw/?ssk=' + SSK, //update user account with token
  userNotifications: API_URL + '/user/get-notifications/?ssk=' + SSK, //update user account with token
  userClearNotifications: API_URL + '/user/clear-notifications/?ssk=' + SSK, //update user account with token
  userAddTestimony: API_URL + '/user/add-testimony/?ssk=' + SSK, //user add testimony
  userGetTestimony: API_URL + '/user/get-testimonies/?ssk=' + SSK, //user add testimony
  userDelTestimony: API_URL + '/user/del-testimony/?ssk=' + SSK, //user add testimony
};
export default Apis;
