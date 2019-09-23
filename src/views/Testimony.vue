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
                <h1>1</h1>
            </div>
            <div class="col-lg-6 bg-danger">
                <h1>2</h1>
            </div>
        </div>
        <modal :adaptive="true" :clickToClose="false" height="auto" name="add-testimony">
            <d-form class="p-3" onsubmit="return false">
                <d-form-row>
                    <d-col class="form-group" md="12">
                        <label for="feInputAddress">Name</label>
                        <d-form-input :value="user.u_name" type="text" id="feInputAddress"
                                      placeholder="Testifier's Name"/>
                        <d-form-input :value="new Date().toUTCString()" type="text" id="feInputDate"
                                      placeholder="Choose Date"/>
                    </d-col>
                    <!-- Description -->
                    <d-col md="12" class="form-group">
                        <label for="desc">Your Testimony</label>
                        <textarea class="form-control" id="desc"
                                  rows="5"></textarea>
                    </d-col>
                </d-form-row>
                <d-form-row>
                    <div class="d-flex justify-content-between w-100">
                        <d-button size="sm" outline theme="danger" class="mb-2 ml-1">Cancel <i class="fa fa-times"></i>
                        </d-button>
                        <d-button size="sm" theme="secondary" class="mb-2 mr-1">Submit Now <i
                                class="fa fa-paper-plane"></i></d-button>
                    </div>
                </d-form-row>
            </d-form>
        </modal>
    </d-container>
</template>

<script>
  import apiCaller from './../data/apiCaller';
  import { mapState } from 'vuex';
  export default {
    computed: mapState(['user', 'title']),
    beforeMount() {
      //auto caller
      new apiCaller(this);
    },
    methods: {
      show() {
        this.$modal.show('add-testimony', this.user);
      },
      hide() {
        this.$modal.hide('add-testimony');
      }
    }
  };
</script>

