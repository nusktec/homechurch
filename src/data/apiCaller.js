/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import dc from './apiConstant';
import store from './../store';
import auth from './auth';
import mutations from './../mutations';

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
    this.userNotifications();
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
              store.commit(mutations.userAdd, uid);
              callback(uid);
            } else {
              callback(false);
              //logout
              auth.logOut();
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
  userUpdate(data, callback) {
    context.axios.post(dc.userUpdate, data)
      .then((res) => {
        if (res.data.status) {
          callback(res.data.data);
          return;
        }
        callback(false);
      })
      .catch((err) => {
        callback(false);
        logs(err);
      });
  }

  //change password
  userUpdatePass(data, callback) {
    context.axios.post(dc.userUpdatePass, data)
      .then(res => {
        let d = res.data;
        if (d) {
          callback(d);
        } else {
          callback(false);
        }
      });
  }

  //load notifications
  userNotifications(callback = () => null) {
    if (store.state.notifications.length > 0) {
      callback(store.state.notifications);
      return;
    }
    //load from api and store it
    let ui = auth.localUserObj();
    context.axios.post(dc.userNotifications, { token: ui.u_token })
      .then(res => {
        if (res.data.status) {
          store.commit(mutations.updateNotifications, res.data.data);
          callback(res.data.data);
        }
      })
      .catch(err => {
        callback(false);
      });
  }

  //clear notifications
  userClearNotifications(callback = () => null) {
    //load from api and store it
    let ui = auth.localUserObj();
    context.axios.post(dc.userClearNotifications, { token: ui.u_token })
      .then(res => {
        if (res.data.status) {
          window.location.reload();
        }
      })
      .catch(err => {
        callback(false);
      });
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
