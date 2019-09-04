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
    let su = JSON.parse(localStorage.getItem(USER_KEY));
    return su != null;
  }

  //check auth role
  static isAdminRole() {
    if (!this.isLogin()) {
      return false;
    }
    let su = localStorage.getItem(USER_KEY);
    let role = JSON.parse(localStorage.getItem(USER_KEY));
    return role.u_isAdmin;
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

const checkJSONValues = function (data) {
  let filtered = [];
  if (typeof (data) === 'object' && data != null) {
    //if is empty return early
    if (Object.keys(data).length < 1) {
      return false;
    }
    //iterate
    for (let key in data) {
      if (data.hasOwnProperty(key) && (!(!data[key]) && (!/^\s*$/.test(data[key])))) {
        filtered.push(true);
      } else {
        filtered.push(false);
      }
    }
  } else {
    return false;
  }
  //finalized
  return !filtered.includes(false);
};

// export class
export default Auth;
