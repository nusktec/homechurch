<template>
    <d-container fluid class="px-4 pb-lg-5 py-5">
        <div class="d-flex justify-content-center my-lg-5">
            <div class="row shadow" style="background-color: white; border-radius: 10px; overflow: hidden; width: 700px">
                <div class="col-lg-6 col-md-12 text-center align-items-center" style="background-color: #2c2f44; overflow: hidden">
                    <h1 style="font-family: Lobster" class="text-white my-5">Greeting, You !</h1>
                    <h3 style="font-family: Sofia" class="text-white my-2">Dunamis Online</h3>
                    <h3 style="font-family: Lexend Deca" class="text-white my-2">Home Cell</h4>
                    <img style="height: 100px;" class="my-3" src="images/connectivity-image.png" alt="Connectivity Image">
                </div>
                <div class="col-lg-6 col-md-12">
                    <d-list-group>
                        <div class="px-lg-2 mx-2 my-2 text-center">
                            <i class="my-4 fa fa-arrow-down"></i>
                            <h6 class="m-0">Existing Member ?</h6>
                            <p class="m-2">Reset Your Account</p>

                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input :disabled="loading" v-model="email" type="email" placeholder="Registered email"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn :disabled="loading" v-on:click="onSubmit" class="btn-block btn-danger">Reset</d-btn>
                                </d-input-group>
                            </d-form>
                            -OR-
                            <router-link to="/login"><p class="mt-0" style="font-size: 13px">Re-Login</p>
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
      util.Util.alertBox(this, 'Login', 'Processing...', 'info', 5000);
      this.loading = true;
      this.axios.get('http://google.com', (res) => {
        console.log(res);
      });
      //release from loading
      this.loading = false;
      return;
    }
    //show warning
    util.Util.alertBox(this, 'Login', 'Some fields were blank or in-appropriate data supplied...', 'warn', 5000);
  }
</script>
