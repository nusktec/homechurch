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
                    <d-button v-on:click="pullTestimony" pill theme="secondary" class="btn-white mr-1">Reload</d-button>
                </div>
            </div>
        </div>
        <page-loader :hide="loader"/>
        <div class="row py-2 my-2">
            <div v-for="(item, key) in testimonies" class="col-lg-4 col-sm-12 col-md-4 mb-4" v-bind:key="item">
                <div :key="key" class="card shadow-lg">
                    <div class="card-header" style="background-image: linear-gradient(to right, #5A6169 , #5A6169)">
                        <h5 class="text-white">#{{key + 1}} - Testimony</h5>
                    </div>
                    <div class="card-body">
                        <h6>{{item.t_name}}</h6>
                        <h6 class="card-title text-muted">{{item.t_date}}</h6>
                        <div class="overflow-scroll" style="max-height: 250px;">
                            <p class="card-text">{{item.t_desc}}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <d-button disabled theme="secondary" outline class="btn-success mr-1"><i
                                    :class="item.t_status?'fa fa-eye':'fa fa-eye-slash'"></i>
                            </d-button>
                            <div class="d-flex justify-content-end">
                                <d-button theme="secondary" class="btn-white mr-1">Share <i class="fa fa-share-alt"></i>
                                </d-button>
                                <d-button v-on:click="deleteTest(item.t_id)" theme="danger" outline
                                          class="btn-danger mr-1"><i class="fa fa-times"></i>
                                </d-button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <d-form-input :value="fdata.tdate" type="text" id="feInputDate" placeholder="Choose Date"/>
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
        <v-dialog :width="300"/>
    </d-container>
</template>

<script>
    import VueBootstrap4Table from 'vue-bootstrap4-table';
    import apiCaller from './../data/apiCaller';
    import {
        mapState
    } from 'vuex';
    import Util from '../utils';

    export default {
        components: {
            VueBootstrap4Table
        },
        computed: mapState(['user', 'title', 'testimonies'],),
        mounted() {
            //auto caller
            new apiCaller(this);
            //wait for user available
            setTimeout(() => {
                apiCaller.actionShooter((u) => {
                    this.fdata = {
                        tname: u.u_name,
                        tdate: new Date().toUTCString(),
                        tdesc: ''
                    };
                });
                //pull testimonies
                this.pullTestimony();
            }, 1000);
        },
        data() {
            return {
                fdata: {
                    tname: '',
                    tdate: new Date().toUTCString(),
                    tdesc: ''
                },
                valid: 'invalid',
                loader: false,
            };
        },
        methods: {
            show() {
                this.$modal.show('add-testimony', this.user);
            },
            hide() {
                this.$modal.hide('add-testimony');
                this.pullTestimony();
            },
            addTestimony: submitTestimony,
            pullTestimony: getTestimonies,
            deleteTest(id) {
                //delete unctions here
                this.$modal.show('dialog', {
                    title: 'Are you sure ?',
                    text: 'You want to delete this testimony ?\nDeletion is final !',
                    buttons: [{
                        title: 'Close'
                    },
                        {
                            title: 'Delete',
                            handler: () => {
                                this.$modal.hide('dialog');
                                //fire deletions
                                new apiCaller(this)
                                    .userDelTestimonies(id, resp => {
                                        if (resp.status) {
                                            Util.Util.alertBox(this, '', 'Deleted !', 'success', 3000);
                                            this.pullTestimony(true);
                                        } else {
                                            Util.Util.alertBox(this, '', 'Unable to delete testimony', 'warn', 3000);
                                        }
                                    });
                            }
                        },
                    ]
                });
            },
        },
    };

    //pull testimonies
    function getTestimonies(forcePull = false) {
        if (forcePull) {
            new apiCaller(this).userGetTestimonies((data) => {
                if (data) {
                    this.$store.commit('updateTestimonies', data);
                    this.loader = true;
                }
            });
        }
        if (this.testimonies) {
            this.loader = true;
            return;
        }
        setTimeout(() => {
            new apiCaller(this).userGetTestimonies((data) => {
                if (data) {
                    this.$store.commit('updateTestimonies', data);
                    this.loader = true;
                }
            });
        }, 1000);
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
                this.pullTestimony(true);
            } else {
                Util.Util.alertBox(this, '', 'Unable to add another testimony, try again', 'warn', 3000);
            }
        });
    }
</script>
