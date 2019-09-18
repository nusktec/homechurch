<template>
    <d-container fluid class="main-content-container px-lg-4">
        <!-- Page Header -->
        <d-row no-gutters class="page-header py-2">
            <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
                <span class="text-uppercase page-subtitle">Home</span>
            </d-col>
        </d-row>
        <!-- Content -->
        <div>
            <div v-if="!isReady" class="p-4" style="position: absolute; top:0; left: 0; bottom: 0; right: 0;">
                <div class="h-100 w-100 my-auto row align-items-center">
                    <div class="col justify-content-center text-center">
                        <h3>Please wait !</h3>
                        <p>Searching for nearby home cells</p>
                        <img width="90" class="py-3" :src="require('@/assets/images/loader2.gif')" alt="Loading"/>
                        <br/>
                        <d-button size="sm" outline theme="secondary" class="mb-2 mr-1"><i class="fa fa-search"></i> Re-scan</d-button>
                    </div>
                </div>
            </div>

            <!--Main App-->
            <div v-if="isReady" class="row">
                <div class="col-lg-6 bg-dark">

                </div>
                <div class="col-lg-6 bg-danger">
                    <h1>1</h1>
                </div>
            </div>
        </div>
    </d-container>
</template>

<script>
  import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
  import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'user-profile-lite',
    components: {
      uplUserDetails: UserDetails,
      uplUserAccountDetails: UserAccountDetails,
    },
    computed: mapState(['user', 'title']),
    beforeMount() {
      //auto caller
      new this.$Api(this);
    },
    data() {
      return { isReady: false };
    }
  };
</script>

