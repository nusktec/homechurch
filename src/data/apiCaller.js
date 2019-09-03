/**
 Author: Revelation Ben
 Company: RSC Byte Limited
 Email: nusktecsoft@gmail.com
 Phone: 2348164242320
 **/
import dc from './apiConstant';

let context = null;

class apiCaller {
  constructor(ctx) {
    context = ctx;
  }

  //sign up functions
  CreateAccount(data, callback) {
    context.axios.post(dc.createUser, data, (res) => {
      callback(res);
    }, err => {
      callback(false, 'An error has occur, Please try again...');
    });
  }

}

// export default
export default apiCaller;
