<template>
    <d-container fluid class="main-content-container px-4 pb-lg-5 py-5" style="background-color: #2c2f44">
        <div class="error">
            <div class="error__content">
                <d-card class="card-small">
                    <!-- Files & Dropdowns -->
                    <d-card-header class="border-bottom">
                        <img class="my-4" width="100" src="logo_ns.png" alt="Logo">
                        <h6 class="m-0">DUNAMIS HOME CELL</h6>
                        <p class="m-0">Please login</p>
                    </d-card-header>

                    <d-list-group flush>
                        <d-list-group-item class="px-lg-5">
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
                            </d-form>
                            <router-link to="/register"><p class="mt-4" style="font-size: 13px">Register Here</p>
                            </router-link>
                            <router-link to="/reset"><p style="font-size: 13px; margin-top: -10px">Forget Password</p>
                            </router-link>
                        </d-list-group-item>
                    </d-list-group>
                </d-card>
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
