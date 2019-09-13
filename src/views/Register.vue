<template>
    <d-container fluid class="px-lg-4 pb-lg-5 py-lg-5">
        <div class="mx-lg-5 pad">
            <div class="row shadow" style="background-color: white; border-radius: 1px; overflow: hidden;">
                <div class="col-lg-8 col-md-12"
                     style="background-image: url('bg.jpg'); background-size: cover; background-repeat: no-repeat;">
                    <div class="h-100 my-auto row align-items-center">
                        <div class="col justify-content-center text-center">
                            <h1 style="font-family: Lobster" class="text-white">Welcome !</h1>
                            <h3 style="font-family: Lobster" class="text-white">Create new account and connect</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <d-list-group>
                        <div class="px-lg-2 mx-2 my-2 text-center">
                            <i class="my-4 fa fa-arrow-down"></i>
                            <h6 class="m-0">New Member ?</h6>
                            <p class="m-2">Create an account</p>

                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-user'/>" class="mb-3">
                                    <d-input :disabled="disabled" v-model="fullName" type="text"
                                             placeholder="Full Name"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-phone'/>" class="mb-3">
                                    <d-input :disabled="disabled" v-model="phone" type="phone" placeholder="Phone"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input :disabled="disabled" v-model="email" type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-venus-mars'/>" class="mb-3">
                                    <d-select :disabled="disabled" v-model="sex">
                                        <option>-Select Sex-</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </d-select>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-globe'/>" class="mb-3">
                                    <country-select :disabled="disabled" className="form-control" v-model="country"
                                                    :country="country"
                                                    topCountry="NG"></country-select>
                                    <region-select :disabled="disabled" className="form-control" v-model="region"
                                                   :country="country"
                                                   :region="region"/>
                                    <d-input :disabled="disabled" v-model="street" type="text"
                                             placeholder="Street (Name, No)"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input :disabled="disabled" v-model="pass1" type="password"
                                             placeholder="Password"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input :disabled="disabled" v-model="pass2" type="password"
                                             placeholder="Re-enter password"/>
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
  import { mapState } from 'vuex';

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
        street: '',
        pass1: '',
        pass2: '',
        disabled: false
      };
    },
    methods: {
      onSubmit: filterSubmit
    },
    computed: mapState(['title'])
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
    //set data progress to disabled
    this.disabled = true;
    Util.Util.alertBox(this, '', 'Please wait, processing registration...', 'info', 3000);
    let controller = new data.apiCaller(this);
    controller.userCreate(this.$data, (data) => {
      if (data) {
        //success
        if (data.status) {
          Util.Util.alertBox(this, '', 'Registration was successful, click <a class="btn btn-info" style="color: white" href="/login">Here</a> to login now', 'success', 15000);
          setTimeout(() => {
            let sucssdata = 'Account Registration~Thank you, your registration went well~Login Now~/login';
            this.$router.push({
              name: 'success',
              query: { data: btoa(sucssdata) }
            });
          }, 1000);
        } else {
          Util.Util.alertBox(this, '', data.msg, 'warn', 3000);
          this.disabled = false;
        }
        return;
      }
      Util.Util.alertBox(this, '', data.msg, 'warn', 3000);
      this.disabled = false;
    });
  }
</script>
