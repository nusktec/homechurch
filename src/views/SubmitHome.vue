<template>
    <d-container fluid class="main-content-container px-lg-4">
        <!-- Page Header -->
        <d-row no-gutters class="page-header py-2">
            <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
                <span class="text-uppercase page-subtitle">Submit Home</span>
            </d-col>
        </d-row>
        <!-- Content -->
        <div class="row">
            <div class="col-lg-12">
                <d-card class="card-small">

                    <!-- Form Example -->
                    <d-card-header class="border-bottom">
                        <h6 class="m-0">Make Your Home Available</h6>
                    </d-card-header>

                    <d-list-group flush>
                        <d-list-group-item class="p-3">
                            <d-row>
                                <d-col>
                                    <d-form onsubmit="return false">
                                        <d-form-row>
                                            <d-col md="12" class="form-group">
                                                <label for="feEmailAddress">Home ID</label>
                                                <d-input id="feEmailAddress" type="text" placeholder="Home ID"
                                                        v-model="hId" :value="'HC'+Math.floor(Math.random()*999999)+1"/>
                                            </d-col>
                                        </d-form-row>
                                        <d-form-row>
                                            <d-col md="4" class="form-group">
                                                <label for="feEmailAddress">Full Name</label>
                                                <d-input v-model="hName" id="feEmailAddress" type="name" placeholder="Full Name"/>
                                            </d-col>
                                            <d-col md="4" class="form-group">
                                                <label for="feEmailAddress">Email</label>
                                                <d-input v-model="hEmail" id="feEmailAddress" type="email" placeholder="Email"/>
                                            </d-col>
                                            <d-col md="4">
                                                <label for=er>Phone</label>
                                                <d-input v-model="hPhone" id="text" type="text" placeholder="Phone"/>
                                            </d-col>
                                        </d-form-row>

                                        <div class="form-group">
                                            <label for="feInputAddress2">Street Address</label>
                                            <d-form-textarea v-model="hsAddress" id="feInputAddress2"
                                                             placeholder="Apartment, Studio, or Floor"></d-form-textarea>
                                        </div>

                                        <div class="form-group">
                                            <label for="feInputAddress">Room details</label>
                                            <d-input v-model="hrDetails" id="feInputAddress" placeholder="Capacity, Room Size,..."/>
                                        </div>

                                        <d-form-row>
                                            <d-col md="6" class="form-group">
                                                <label for="feInputZip">Select Country</label>
                                                <country-select :disabled="disabled" className="form-control"
                                                                v-model="hCountry"
                                                                :country="hCountry"
                                                                topCountry="NG"></country-select>
                                            </d-col>
                                            <d-col md="6" class="form-group">
                                                <label for="feInputZip">Select Region</label>
                                                <region-select :disabled="disabled" className="form-control"
                                                               v-model="hRegion"
                                                               :country="hCountry"
                                                               :region="hRegion"/>
                                            </d-col>
                                        </d-form-row>
                                        <d-button @click="submit" type="submit">Submit Home</d-button>
                                    </d-form>
                                </d-col>
                            </d-row>
                        </d-list-group-item>
                    </d-list-group>

                </d-card>
            </div>
        </div>
    </d-container>
</template>

<script>
    import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
    import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
    import apiCaller from './../data/apiCaller';
    import {mapState} from 'vuex';
    import DFormTextarea from "../../node_modules/shards-vue/src/components/form-textarea/FormTextarea";
    import Util from "../utils/index";

    export default {
        name: 'user-profile-lite',
        components: {
            DFormTextarea,
            uplUserDetails: UserDetails,
            uplUserAccountDetails: UserAccountDetails,
        },
        data(){
            return {
                hId: "",
                hName: "",
                hPhone: "",
                hEmail: "",
                hsAddress: "",
                hrDetails: "",
                hCountry: "",
                hRegion: "",
                disabled: false,
            }
        },
        computed: mapState(['user', 'title']),
        beforeMount() {
            //auto caller
            new apiCaller(this);
        },
        methods: {
            submit: readySubmit,
        }
    };

    function readySubmit() {
        if(Util.Util.checkJSONValuesNoFalse(this.$data)) {
            Util.Util.alertBox(this, '', 'Home submitted for approval, will notify you shortly....', 'success', 3000);
            this.$data.hName = "";
            this.$data.hEmail = "";
            this.$data.h = "";
        }else{
            Util.Util.alertBox(this, '', 'Please complete the form before submission', 'warn', 3000);
        }
    }
</script>

