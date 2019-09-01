<template>
    <d-container fluid class="main-content-container px-2 pb-lg-5" style="background-color: #2c2f44">
        <!-- Error -->
        <vue-headful title="DHC | Login"/>
        <div class="error">
            <div class="error__content">
                <d-card class="card-small">
                    <!-- Files & Dropdowns -->
                    <d-card-header class="border-bottom">
                        <img class="my-4" width="100" src="logo_ns.png" alt="Logo">
                        <h6 class="m-0">DUNAMIS HOME CELL</h6>
                        <p class="m-0">Create an account</p>
                    </d-card-header>

                    <d-list-group flush>
                        <d-list-group-item class="px-lg-5">
                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-user'/>" class="mb-3">
                                    <d-input type="text" placeholder="Full Name"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-user'/>" class="mb-3">
                                    <d-input type="text" placeholder="Phone"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input type="password" placeholder="Password"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn v-on:click="onSubmit" class="btn-block">Register</d-btn>
                                </d-input-group>
                            </d-form>
                            <router-link to="/login"><p class="mt-4" style="font-size: 13px">Login</p>
                            </router-link>
                        </d-list-group-item>
                    </d-list-group>
                </d-card>
            </div>
        </div>
    </d-container>
</template>
<script>
  import VueHeadful from 'vue-headful';
  import validator from 'validator';

  export default {
    components: { VueHeadful },
    methods: {
      onSubmit: () => {
        //alert('Hello !');
        alert(validator.isEmail('hello'));
      }
    }
  };
</script>
