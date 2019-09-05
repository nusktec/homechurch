/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import dc from './apiConstant';
import store from './../store';
import auth from './auth';
import mutatinos from './../mutations';

const logger = true;
let context = null;

class apiCaller {
  constructor(ctx) {
    context = ctx;
    //start auto loading
    if(auth.isLogin()){
      this.mainLoader();
    }
  }

  mainLoader(){
    this.getAccountNoCallBack();
  }

  //sign up functions
  createAccount(data, callback) {
    context.axios.post(dc.userCreate, data)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        logs(err);
        callback(false, 'An error has occur, Please try again...');
      });
  }

  //functions for login
  loginAccount(data, callback) {
    context.axios.post(dc.userLogin, data)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        logs(err);
        callback(false);
      });
  }

  //pull logged account
  getAccount(callback) {
    let storeData = store.state.user;
    if (storeData) {
      callback(storeData);
    } else {
      //recall store data
      try {
        let ui = auth.localUserObj();
        context.axios.post(dc.userGetter, {
          email: ui.u_email,
          token: ui.u_token
        })
          .then(res => {
            if (res.data.status) {
              let uid = res.data.data;
              store.commit(mutatinos.userAdd, uid);
              callback(uid);
            } else {
              callback(false);
            }
          });
      } catch (e) {
        callback(false);
        logs(e);
      }
    }
  }
  //get account no call back
  getAccountNoCallBack(){
  this.getAccount(res=>{});
  }
}

//logger expo
function logs(data) {
  if (logger) {
    console.log(data);
  }
}

// export default
export default apiCaller;
