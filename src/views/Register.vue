<template>
    <d-container fluid class="px-4 pb-lg-5 py-5">
        <div class="container">
            <div class="row shadow" style="background-color: white; border-radius: 10px; overflow: hidden;">
                <div class="col-lg-7 col-md-12 text-center align-items-center" style="background-color: #2c2f44">
                    <h1 style="font-family: Lobster" class="text-white my-5">Greeting, You !</h1>
                    <h2 style="font-family: Sofia" class="text-white my-2">Dunamis Online</h2>
                    <h4 style="font-family: Lexend Deca" class="text-white my-2">Home Cell</h4>
                    <img class="my-5" width="50%" src="images/connectivity-image.png" alt="Connectivity Image">
                </div>
                <div class="col-lg-5 col-md-12">
                    <d-list-group>
                        <div class="px-lg-2 mx-2 my-2 text-center">
                            <i class="my-4 fa fa-arrow-down"></i>
                            <h6 class="m-0">New Member ?</h6>
                            <p class="m-2">Create an account</p>

                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-user'/>" class="mb-3">
                                    <d-input v-model="fullName" type="text" placeholder="Full Name"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-phone'/>" class="mb-3">
                                    <d-input v-model="phone" type="text" placeholder="Phone"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input v-model="email" type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-venus-mars'/>" class="mb-3">
                                    <d-select v-model="sex">
                                        <option>-Select Sex-</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </d-select>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-globe'/>" class="mb-3">
                                    <country-select className="form-control" v-model="country" :country="country"
                                                    topCountry="US"></country-select>
                                    <region-select className="form-control" v-model="region" :country="country"
                                                   :region="region"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input v-model="pass1" type="password" placeholder="Password"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input v-model="pass2" type="password" placeholder="Re-enter password"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn v-on:click="onSubmit" class="btn-block btn-danger">Register</d-btn>
                                </d-input-group>
                            </d-form>
                            -OR-
                            <router-link to="/login"><p class="mt-0" style="font-size: 13px">Login Here</p>
                            </router-link>
                        </div>
                    </d-list-group>
                </div>
            </div>
        </div>
    </d-container>
</template>
<script>
  import Util from './../utils';
  import VueHeadful from 'vue-headful';
  import validator from 'validator';
  import data from './../data';

  export default {
    components: { VueHeadful },
    data() {
      return {
        fullName: '',
        phone: '',
        email: '',
        sex: '',
        country: '',
        region: '',
        pass1: '',
        pass2: '',
      };
    },
    methods: {
      onSubmit: filterSubmit
    }
  };

  //filter and submit
  function filterSubmit(e) {
    if (!validator.isLength(this.fullName, {
      min: 5,
      max: 100
    })) {
      Util.Util.alertBox(this, '', 'Invalid full name format or blank.', 'warn', 3000);
      return;
    }
    if (!validator.isMobilePhone(this.phone)) {
      Util.Util.alertBox(this, '', 'Invalid phone format or blank.', 'warn', 3000);
      return;
    }
    if (!validator.isEmail(this.email)) {
      Util.Util.alertBox(this, '', 'Invalid email format or blank.', 'warn', 3000);
      return;
    }
    if (validator.isEmpty(this.sex)) {
      Util.Util.alertBox(this, '', 'Select sex.', 'warn', 3000);
      return;
    }
    if (validator.isEmpty(this.country) || validator.isEmpty(this.region)) {
      Util.Util.alertBox(this, '', 'Please select country and region.', 'warn', 3000);
      return;
    }
    if (validator.isEmpty(this.pass1) || validator.isEmpty(this.pass2)) {
      Util.Util.alertBox(this, '', 'Please enter password and confirm.', 'warn', 3000);
      return;
    }
    //check for password equality
    if (!validator.equals(this.pass1, this.pass2)) {
      Util.Util.alertBox(this, '', 'Password not the same.', 'warn', 3000);
      return;
    }
    let controller = new data.apiCaller(this);
    controller.CreateAccount(this.$data, (res, msg) => {
      if (res) {
        //success
        Util.Util.alertBox(this, '', msg, 'info', 3000);
        return;
      }
      Util.Util.alertBox(this, '', msg, 'warn', 3000);
    });
  }
</script>
