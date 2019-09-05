<template>
    <d-container fluid class="px-lg-4 pb-lg-5 py-lg-5">
        <div class="d-flex justify-content-center my-lg-5">
            <div class="row shadow" style="background-color: white; border-radius: 1px; overflow: hidden; width: 700px">
                <div class="col-lg-6 col-md-12 text-center align-items-center"
                     style="background-color: #2c2f44; overflow: hidden">
                    <h1 style="font-family: Lobster" class="text-white my-5">Greeting, You !</h1>
                    <h3 style="font-family: Sofia" class="text-white my-2">Dunamis Online</h3>
                    <h4 style="font-family: Lexend Deca" class="text-white my-2">Home Cell</h4>
                    <img style="height: 100px;" class="my-3" src="images/connectivity-image.png"
                         alt="Connectivity Image">
                </div>
                <div class="col-lg-6 col-md-12">
                    <d-list-group>
                        <div class="px-lg-2 mx-2 my-2 text-center">
                            <i class="my-4 fa fa-arrow-down"></i>
                            <h6 class="m-0">Existing Member ?</h6>
                            <p class="m-2">Please login here</p>

                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input :disabled="loading" v-model="email" type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input :disabled="loading" v-model="password" type="password"
                                             placeholder="Password"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn :disabled="loading" v-on:click="onSubmit" class="btn-block">Login</d-btn>
                                </d-input-group>
                                <router-link to="/reset"><p class="mt-0" style="font-size: 13px">Forgot Password</p>
                                </router-link>
                            </d-form>
                            -OR-
                            <router-link to="/register"><p class="mt-0" style="font-size: 13px">Register</p>
                            </router-link>
                        </div>
                    </d-list-group>
                </div>
            </div>
        </div>
    </d-container>
</template>
<script>
  import VueHeadful from 'vue-headful';
  import validator from 'validator';
  import util from './../utils';
  import data from './../data';
  import store from './../store';

  export default {
    components: { VueHeadful },
    data() {
      return {
        email: '',
        password: '',
        loading: false,
      };
    },
    methods: {
      onSubmit: loginRequest
    }
  };

  //on login Request
  function loginRequest() {
    let valEmail = validator.isEmail(this.email);
    let valPassword = validator.isLength(this.password, {
      min: 5,
      max: 15
    });
    if (valEmail && valPassword) {
      //submit
      this.loading = true;
      let dc = new data.apiCaller(this);
      dc.loginAccount(this.$data, (res) => {
        this.loading = false;
        if (res && res.status) {
          //pull to store
          store.commit('userAdd', res.data);
          //login has begin
          util.Util.alertBox(this, '', res.msg, 'success', 3000);
          data.auth.setLogin(JSON.stringify(res.data));
          //Profile leading
          this.$router.push({ name: 'profile' });
        } else {
          util.Util.alertBox(this, '', res.msg, 'warn', 5000);
        }
      });
      return;
    }
    //show warning
    util.Util.alertBox(this, '', 'Some fields were blank or in-appropriate data supplied...', 'warn', 5000);
  }
</script>
