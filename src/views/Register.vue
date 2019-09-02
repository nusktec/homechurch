<template>
    <d-container fluid class="px-4 pb-lg-5 py-5">
        <div class="container">
            <div class="row shadow" style="background-color: white; border-radius: 10px; overflow: hidden;">
                <div class="col-lg-7 col-md-12 text-center align-items-center" style="background-color: #2c2f44">
                    <h1 style="font-family: Lobster" class="text-white my-5">Greeting, You !</h1>
                    <h2 style="font-family: Sofia" class="text-white my-2">Dunamis Online</h2>
                    <h4 style="font-family: Lexend Deca" class="text-white my-2">Home Cell</h4>
                    <img class="my-5" width="50%" src="images/connectivity-image.png" alt="Connectivity Image">
                </div>
                <div class="col-lg-5 col-md-12">
                    <d-list-group>
                        <div class="px-lg-2 mx-2 my-2 text-center">
                            <i class="my-4 fa fa-arrow-down"></i>
                            <h6 class="m-0">New Member ?</h6>
                            <p class="m-2">Create an account</p>

                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-user'/>" class="mb-3">
                                    <d-input type="text" placeholder="Full Name"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-phone'/>" class="mb-3">
                                    <d-input type="text" placeholder="Phone"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-globe'/>" class="mb-3">
                                    <country-select className="form-control" v-model="country" :country="country"
                                                    topCountry="US"></country-select>
                                    <region-select className="form-control" v-model="region" :country="country"
                                                   :region="region"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input type="password" placeholder="Password"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input type="password" placeholder="Re-enter password"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn v-on:click="onSubmit" class="btn-block btn-danger">Register</d-btn>
                                </d-input-group>
                            </d-form>
                            -OR-
                            <router-link to="/login"><p class="mt-0" style="font-size: 13px">Login Here</p>
                            </router-link>
                        </div>
                    </d-list-group>
                </div>
            </div>
        </div>
    </d-container>
</template>
<script>
  import VueHeadful from 'vue-headful';
  import validator from 'validator';

  export default {
    components: { VueHeadful },
    data() {
      return {
        title: this.$router.currentRoute.meta.title,
        fullName: '',
        phone: '',
        email: '',
        country: '',
        region: '',
        pass1: '',
        pass2: '',
      };
    },
    methods: {
      onSubmit: () => {
        //alert('Hello !');
        alert(validator.isEmail('hello'));
      }
    }
  };
</script>
