<template>
    <d-container fluid class="main-content-container px-4 pb-lg-5 py-5">
        <div class="error">
            <div class="error__content">
                <d-card class="card-small container-fluid">
                    <!-- Files & Dropdowns -->
                    <d-card-header class="border-bottom">
                        <img class="my-4" width="100" src="logo_ns.png" alt="Logo">
                        <h6 class="m-0">DUNAMIS HOME CELL</h6>
                        <p class="m-2">Please login</p>
                    </d-card-header>

                    <d-list-group flush>
                        <d-list-group-item class="px-lg-5">
                            <d-form onsubmit="return false">
                                <!-- Dropdown Input Groups -->
                                <d-input-group prepend="<i class='fa fa-envelope'/>" class="mb-3">
                                    <d-input :disabled="loading" v-model="email" type="email" placeholder="Email"/>
                                </d-input-group>
                                <d-input-group prepend="<i class='fa fa-key'/>" class="mb-3">
                                    <d-input :disabled="loading" v-model="password" type="password"
                                             placeholder="Password"/>
                                </d-input-group>
                                <d-input-group>
                                    <d-btn :disabled="loading" v-on:click="onSubmit" class="btn-block">Login</d-btn>
                                </d-input-group>
                            </d-form>
                            <router-link to="/register"><p class="mt-4" style="font-size: 13px">Register Here</p>
                            </router-link>
                            <router-link to="/reset"><p style="font-size: 13px; margin-top: -10px">Forget Password</p>
                            </router-link>
                        </d-list-group-item>
                    </d-list-group>
                </d-card>
            </div>
        </div>
    </d-container>
</template>
