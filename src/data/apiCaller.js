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
    if (auth.isLogin()) {
      this.mainLoader();
    }
  }

  //auto load
  mainLoader() {
    this.userGetNoCallBack();
  }

  //user create an account
  userCreate(data, callback) {
    context.axios.post(dc.userCreate, data)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        logs(err);
        callback(false, 'An error has occur, Please try again...');
      });
  }

  //user login into account
  userAccount(data, callback) {
    context.axios.post(dc.userLogin, data)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        logs(err);
        callback(false);
      });
  }

  //user get account from local
  userGet(callback) {
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

  //user get account no call back
  userGetNoCallBack() {
    this.userGet(res => {
    });
  }

  //user update account
  userUpdate($data, callback) {

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
