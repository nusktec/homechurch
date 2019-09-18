<template>
    <div>
        <d-card class="card-small mb-4 pt-3">

            <!-- Card Header -->
            <d-card-header class="border-bottom text-center">

                <!-- User Avatar -->
                <div class="mb-3 mx-auto">
                    <img class="rounded-circle" :src="u_img"
                         :alt="userDetails.role"
                         width="110">
                </div>
                <!-- User Name -->
                <p class="mb-0">{{ userDetails.u_name }}</p>
                <!-- User Job Title -->
                <span class="text-muted d-block mb-2 badge">{{ userDetails.u_role===0?'Member':'HC.Leader' }}</span>

                <!-- User Follow -->
                <d-button pill outline size="sm" class="mb-2"><i class="material-icons mr-1">note</i> Give Testimony
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
                            <d-input v-model="pass.passOld" placeholder="Old Password"/>
                        </d-input-group>

                        <div class="row">
                            <div class="col-6">
                                <d-input-group seamless class="mb-1">
                                    <d-input-group-text slot="prepend">
                                        <i class="fa fa-key"></i>
                                    </d-input-group-text>
                                    <d-input type="password" v-model="pass.passNew1" placeholder="New Password"/>
                                </d-input-group>
                            </div>
                            <div class="col-6">
                                <d-input-group seamless class="mb-1">
                                    <d-input-group-text slot="prepend">
                                        <i class="fa fa-key"></i>
                                    </d-input-group-text>
                                    <d-input type="password" v-model="pass.passNew2" placeholder="Repeat Password"/>
                                </d-input-group>
                            </div>
                        </div>
                        <d-button @click="changePass" theme="danger" class="mb-0 w-100">Change Password</d-button>
                    </div>
                </d-list-group-item>
            </d-list-group>

        </d-card>
    </div>
</template>

<script>
    //imports
    import val from 'validator';

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
        u_img: require('@/assets/images/avatars/0.png')
      };
    },
    watch: {
      userDetails: function (val) {
        this.u_img = require('@/assets/images/avatars/' + val.u_avatar + '.jpg');
        this.userDetails = val === false ? {} : val;
      }
    },
    methods: {
      changePass: changePassword,
    }
  };

  //change password
  function changePassword() {
    alert(this.pass.passNew1);
  }
</script>
