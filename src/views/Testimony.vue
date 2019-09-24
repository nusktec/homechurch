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
            <div class="col-lg-12">
                <div class="d-flex justify-content-between">
                    <d-button v-on:click="show" pill outline theme="secondary" size="sm">Create New Testimony</d-button>
                    <d-button v-on:click="pullTestimony" pill class="btn-white mr-1">Reload</d-button>
                </div>
            </div>
        </div>
        <div class="row py-2 my-2">
            <div class="col-lg-12">

            </div>
        </div>
        <modal :adaptive="true" :clickToClose="false" height="auto" name="add-testimony">
            <d-form class="p-3" onsubmit="return false">
                <d-form-row>
                    <d-col class="form-group" md="12">
                        <label for="feInputAddress">Name</label>
                        <d-form-input v-model="fdata.tname" type="text" id="feInputAddress"
                                      placeholder="Testifier's Name"/>
                    </d-col>
                    <d-col class="form-group" md="12">
                        <label for="feInputAddress">Testimony Date</label>
                        <d-form-input :value="fdata.tdate" type="text" id="feInputDate"
                                      placeholder="Choose Date"/>
                    </d-col>
                    <!-- Description -->
                    <d-col md="12" class="form-group">
                        <label for="desc">Your Testimony ({{fdata.tdesc.length}}/1000)</label>
                        <d-textarea maxlength="1000" v-model="fdata.tdesc" class="form-control" id="desc"
                                    rows="5"></d-textarea>
                    </d-col>
                </d-form-row>
                <d-form-row>
                    <div class="d-flex justify-content-between w-100">
                        <d-button v-on:click="hide" size="sm" outline theme="danger" class="mb-2 ml-1">Cancel <i
                                class="fa fa-times"></i>
                        </d-button>
                        <d-button v-on:click="addTestimony" size="sm" theme="secondary" class="mb-2 mr-1">Submit Now <i
                                class="fa fa-paper-plane"></i></d-button>
                    </div>
                </d-form-row>
            </d-form>
        </modal>
    </d-container>
</template>

<script>
  import VueBootstrap4Table from 'vue-bootstrap4-table';
  import apiCaller from './../data/apiCaller';
  import { mapState } from 'vuex';
  import Util from '../utils';

  export default {
    components: { VueBootstrap4Table },
    computed: mapState(['user', 'title'],),
    mounted() {
      //auto caller
      new apiCaller(this);
      //wait for user available
      apiCaller.actionShooter((u) => {
        this.fdata = {
          tname: u.u_name,
          tdate: new Date().toUTCString(),
          tdesc: ''
        };
      });
      //pull testimonies
      this.pullTestimony();
    },
    data() {
      return {
        fdata: {
          tname: '',
          tdate: new Date().toUTCString(),
          tdesc: ''
        },
        valid: 'invalid',
        testimonies: []
      };
    },
    methods: {
      show() {
        this.$modal.show('add-testimony', this.user);
      },
      hide() {
        this.$modal.hide('add-testimony');
      },
      addTestimony: submitTestimony,
      pullTestimony: getTestimonies,
    }
  };

  //pull testimonies
  function getTestimonies() {
    new apiCaller(this).userGetTestimonies((data) => {
      if (data) {
        this.testimonies = data;
      }
    });
  }

  //add testimony values
  function submitTestimony() {
    if (this.fdata.tname === '' || this.fdata.tdat === '' || this.fdata.tdesc === '') {
      Util.Util.alertBox(this, '', 'Please fill in the form appropriately', 'warn', 3000);
      return;
    }
    if (this.fdata.tdesc.length < 100) {
      Util.Util.alertBox(this, '', 'Testimony length too small, should more than 100 char.', 'warn', 3000);
      return;
    }
    //approach network for submits
    new apiCaller(this).userAddTestimonies({
      token: this.user.u_token,
      tname: this.fdata.tname,
      tdate: this.fdata.tdate,
      tdesc: this.fdata.tdesc
    }, (res) => {
      if (res) {
        Util.Util.alertBox(this, '', 'New testimony added !', 'success', 3000);
        this.fdata.tdate = new Date().toUTCString();
        this.fdata.tdesc = '';
        this.fdata.tname = this.user.u_name;
        this.hide();
      } else {
        Util.Util.alertBox(this, '', 'Could not add another testimony at the moment', 'warn', 3000);
      }
    });
  }
</script>

