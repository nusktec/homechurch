<template>
    <d-container fluid class="main-content-container px-4">
        <!-- Page Header -->
        <d-row no-gutters class="page-header py-2">
            <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
                <span class="text-uppercase page-subtitle">Profile</span>
            </d-col>
        </d-row>
        <h1>{{userData.u_email}}</h1>
        <!-- Content -->
        <d-row>
            <d-col lg="4">
                <upl-user-details/>
            </d-col>
            <d-col lg="8">
                <upl-user-account-details/>
            </d-col>
        </d-row>
    </d-container>
</template>

<script>
  import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
  import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
  import apiCaller from './../data/apiCaller';
  import { mapState } from 'vuex';

  export default {
    name: 'user-profile-lite',
    components: {
      uplUserDetails: UserDetails,
      uplUserAccountDetails: UserAccountDetails,
    },
    computed: mapState({
      userData: state => state.user
    }),
    beforeMount() {
      //auto caller
      new apiCaller(this);
    },
  };
</script>

