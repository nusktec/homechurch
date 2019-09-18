<template>
    <div>
        <d-card class="card-small mb-4 pt-3">

            <!-- Card Header -->
            <d-card-header class="border-bottom text-center">

                <!-- User Avatar -->
                <div class="mb-3 mx-auto">
                    <img class="rounded-circle pimg" :src="u_img"
                         :alt="userDetails.role"
                         width="110">
                </div>
                <!-- User Name -->
                <p class="mb-0">{{ userDetails.u_name }}</p>
                <!-- User Job Title -->
                <span class="text-muted d-block mb-2 badge">{{ userDetails.u_role===0?'Member':'HC.Leader' }}</span>

                <!-- User Follow -->
                <router-link to="/testimony">
                    <d-button pill outline theme="secondary" size="sm" class="mb-2"><i
                            class="material-icons mr-1">note</i> Give Testimony
                    </d-button>
                </router-link>
                <d-button v-on:click="uploadDp" pill outline theme="secondary" size="sm" class="mb-2 ml-2"><i
                        class="material-icons">image</i>DP
                </d-button>
            </d-card-header>

            <d-list-group flush>
                <!-- User Meta -->
                <d-list-group-item>
                    <strong class="text-muted d-block mb-2">About you</strong>
                    <span>{{ userDetails.u_desc }}</span>
                </d-list-group-item>
            </d-list-group>

        </d-card>

        <d-card class="card-small mb-4 pt-3">
            <d-list-group flush>
                <!-- User Performance Report -->
                <d-list-group-item class="px-4">
                    <h5>Change Password</h5>
                </d-list-group-item>
                <d-list-group-item class="px-4">
                    <div class="row">
                        <d-input-group seamless class="mb-1">
                            <d-input-group-text slot="prepend">
                                <i class="fa fa-lock"></i>
                            </d-input-group-text>
                            <d-input type="password" v-model="pass.passOld" placeholder="Old Password"/>
                        </d-input-group>

                        <div class="row">
                            <div class="col-6">
                                <d-input-group seamless class="mb-1">
                                    <d-input-group-text slot="prepend">
                                        <i class="fa fa-key"></i>
                                    </d-input-group-text>
                                    <d-input @change="comparePass" :state="invalid" type="password"
                                             v-model="pass.passNew1"
                                             placeholder="New Password"/>
                                </d-input-group>
                            </div>
                            <div class="col-6">
                                <d-input-group seamless class="mb-1">
                                    <d-input-group-text slot="prepend">
                                        <i class="fa fa-key"></i>
                                    </d-input-group-text>
                                    <d-input @change="comparePass" :state="invalid" type="password"
                                             v-model="pass.passNew2"
                                             placeholder="Repeat Password"/>
                                </d-input-group>
                            </div>
                        </div>
                        <d-button :disabled="btnLoad" @click="changePass" theme="danger" class="mb-0 w-100">Change
                            Password
                        </d-button>
                    </div>
                </d-list-group-item>
            </d-list-group>

        </d-card>
    </div>
</template>

<script>
  //imports
  import validator from 'validator';
  import Util from './../../utils/';

  const defaultUserDetails = {
    u_name: 'Please wait...',
    u_avatar: 1, //require('@/assets/images/avatars/1.jpg'),
    u_role: 0,
    u_progress: 0,
    u_desc: 'Loading...',
  };

  export default {
    name: 'user-details',
    props: {
      /**
       * The user details.
       */
      userDetails: {
        type: null,
        default() {
          return defaultUserDetails;
        },
      },
    },
    data() {
      return {
        pass: {
          passOld: '',
          passNew1: '',
          passNew2: '',
        },
        u_img: require('@/assets/images/avatars/0.png'),
        btnLoad: false,
        invalid: null,
        imgPath: this.$ApiCons.appFile.userAvatar,
      };
    },
    watch: {
      userDetails: function (val) {
        this.u_img = require('@/assets/images/avatars/' + val.u_avatar + '.jpg');
        this.userDetails = val === false ? {} : val;
      },
    },
    methods: {
      changePass: changePassword,
      comparePass: comparePassword,
      uploadDp: updateAvatar,
      onFile(file){
        //load file here
        console.log(file);
        this.u_img = file.name;
      }
    }
  };

  //compare and mark password
  function comparePassword() {
    //make password correct
    if (this.pass.passNew1 === this.pass.passNew2) {
      this.invalid = 'valid';
    } else {
      this.invalid = 'invalid';
    }
  }

  //change dp
  function updateAvatar() {
    //start imaging

  }

  //change password
  function changePassword() {
    let api = new this.$Api(this);
    let oldP = validator.isLength(this.pass.passOld, {
      min: 5,
      max: 15
    });
    let oldN1 = validator.isLength(this.pass.passNew1, {
      min: 5,
      max: 15
    });
    let oldN2 = validator.isLength(this.pass.passNew2, {
      min: 5,
      max: 15
    });
    if (!oldP || !oldN1 || !oldN2) {
      //change password
      Util.Util.alertBox(this, '', 'Password pattern too small', 'warn', 3000);
      return;
    }
    if (this.pass.passNew1 !== this.pass.passNew2) {
      //change password
      Util.Util.alertBox(this, '', 'Password doesn\'t look same', 'warn', 3000);
      return;
    }
    //proceed updating account
    this.btnLoad = true;
    let data = {
      passwordOld: this.pass.passOld,
      passwordNew: this.pass.passNew1,
      token: this.userDetails.u_token
    };
    api.userUpdatePass(data, (callback) => {
      if (callback.status) {
        Util.Util.alertBox(this, '', 'Password successfully changed', 'success', 3000);
        this.pass = {};
        this.invalid = null;
      } else {
        Util.Util.alertBox(this, '', callback.msg, 'warn', 3000);
      }
      this.btnLoad = false;
    });
  }
</script>
