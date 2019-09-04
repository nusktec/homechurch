/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import dc from './apiConstant';

const logger = true;
let context = null;

class apiCaller {
  constructor(ctx) {
    context = ctx;
  }

  //sign up functions
  createAccount(data, callback) {
    context.axios.post(dc.createUser, data)
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
    context.axios.post(dc.loginUser, data)
      .then(res => {
        callback(res);
      })
      .catch(err => {
        logs(err);
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
