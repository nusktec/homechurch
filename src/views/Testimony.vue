<template>
    <d-container fluid class="main-content-container px-lg-4">
        <!-- Page Header -->
        <d-row no-gutters class="page-header py-2">
            <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
                <span class="text-uppercase page-subtitle">Testimony</span>
            </d-col>
        </d-row>
        <!-- Content -->
        <div class="row">
            <div class="col-lg-6">
                <d-button v-on:click="show" pill outline theme="secondary" size="sm">Create New Testimony</d-button>
            </div>
        </div>
        <div class="row py-2">
            <div class="col-lg-6 bg-danger">

            </div>
            <div class="col-lg-6 bg-danger">
                <h1>1</h1>
            </div>
        </div>

        <modal name="hello-world">
            <d-form class="p-3">
                <d-form-row>
                    <d-col class="form-group" md="12">
                        <label for="feInputAddress">Name</label>
                        <d-form-input type="text" id="feInputAddress"
                                      placeholder="Testifier's Name"/>
                    </d-col>
                    <!-- Description -->
                    <d-col md="12" class="form-group">
                        <label for="desc">Your Testimony</label>
                        <textarea class="form-control" id="desc"
                                  rows="5"></textarea>
                    </d-col>
                </d-form-row>

                <d-button pill type="submit" class="btn-accent">Submit Now
                </d-button>

            </d-form>
        </modal>
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
    computed: mapState(['user', 'title']),
    beforeMount() {
      //auto caller
      new apiCaller(this);
    },
    methods: {
      show() {
        this.$modal.show('hello-world');
      },
      hide() {
        this.$modal.hide('hello-world');
      }
    }
  };
</script>

