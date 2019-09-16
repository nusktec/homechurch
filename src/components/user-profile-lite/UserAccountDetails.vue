<template>
    <d-card class="card-small mb-4">

        <!-- Card Header -->
        <d-card-header class="border-bottom">
            <h6 class="m-0">{{ title }}</h6>
        </d-card-header>

        <d-list-group flush>
            <d-list-group-item class="p-3">
                <d-row>
                    <d-col>
                        <d-form onsubmit="return false">
                            <d-form-row>

                                <!-- First Name -->
                                <d-col md="12" class="form-group">
                                    <label for="feFirstName">Full Name</label>
                                    <d-form-input v-model="userDetails.u_name" type="text" id="feFirstName"
                                                  placeholder="Full Name" value="Sierra"/>
                                </d-col>
                            </d-form-row>

                            <d-form-row>

                                <!-- Email -->
                                <d-col md="6" class="form-group">
                                    <label for="feEmail">Email</label>
                                    <d-form-input disabled="true" :value="userDetails.u_email" type="email" id="feEmail"
                                                  placeholder="Email Address"/>
                                </d-col>

                                <!-- Password -->
                                <d-col md="6" class="form-group">
                                    <label for="input">User ID</label>
                                    <d-form-input disabled="true" type="text" id="input" placeholder="User ID"
                                                  :value="'000'+userDetails.u_id+userDetails.u_name.substr(0,2).toUpperCase()"/>
                                </d-col>

                            </d-form-row>

                            <!-- Address -->
                            <d-form-row>
                                <d-col class="form-group" md="6">
                                    <label for="feInputAddress">Phone No.</label>
                                    <d-form-input v-model="userDetails.u_phone" type="text" id="phone"
                                                  placeholder="Phone No."/>
                                </d-col>
                                <d-col class="form-group" md="6">
                                    <label for="feInputAddress">Address</label>
                                    <d-form-input v-model="userDetails.u_street" type="text" id="feInputAddress"
                                                  placeholder="Street, Address"/>
                                </d-col>
                            </d-form-row>
                            <d-form-row>
                                <!-- City -->
                                <d-col md="6" class="form-group">
                                    <label for="feInputCity">Country</label>
                                    <country-select className="form-control"
                                                    v-model="userDetails.u_country"
                                                    :country="userDetails.u_country"
                                                    topCountry="NG"></country-select>
                                </d-col>

                                <!-- State -->
                                <d-col md="4" class="form-group">
                                    <label for="feInputState">State</label>
                                    <region-select className="form-control"
                                                   v-model="userDetails.u_state"
                                                   :country="userDetails.u_country"
                                                   :region="userDetails.u_state"/>
                                </d-col>

                                <!-- Zip Code -->
                                <d-col md="2" class="form-group">
                                    <label for="inputZip">Gender</label>
                                    <d-select :disabled="disabled" v-model="userDetails.u_gender">
                                        <option>-Select Gender-</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </d-select>
                                </d-col>

                            </d-form-row>

                            <d-form-row>
                                <!-- Description -->
                                <d-col md="12" class="form-group">
                                    <label for="desc">About you</label>
                                    <textarea class="form-control" id="desc" v-model="userDetails.u_desc"
                                              rows="5"></textarea>
                                </d-col>
                            </d-form-row>

                            <d-button v-on:click="submitUpdate" type="submit" class="btn-accent">Update Account
                            </d-button>

                        </d-form>
                    </d-col>
                </d-row>
            </d-list-group-item>
        </d-list-group>
    </d-card>
</template>

<script>
  import util from './../../utils/';
  import apiCall from './../../data/apiCaller';

  export default {
    name: 'user-account-details',
    props: {
      /**
       * The component title.
       */
      userDetails: {},
      title: {
        type: String,
        default: 'Account Details',
      },
    },
    data() {
      return {
        userDetails: userDetails
      };
    },
    methods: {
      submitUpdate: updateApi,
    }
  };

  //update functions
  function updateApi() {
    let api = new apiCall(this);
    let d = this.userDetails;
    api.userUpdate(d, (res) => {
      if (res) {
        util.Util.alertBox(this, '', "Account updated successfully",'success', 3000);
        return;
      }
      //error showcasing
    });
  }
</script>
