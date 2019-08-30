/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
const USER_KEY = 'user';

class Auth {
  // check if it's login
  static isLogin() {
    return localStorage.getItem(USER_KEY) ? localStorage.getItem(USER_KEY) : false;
  }

  // set login data
  static setLogin(data) {
    localStorage.setItem(USER_KEY, data);
  }

  // logout session
  static logOut() {
    localStorage.clear();
  }
}

// export class
export default Auth;
