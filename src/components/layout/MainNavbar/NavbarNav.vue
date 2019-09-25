<template>
    <d-navbar-nav class="border-left flex-row">
        <li class="nav-item border-right dropdown notifications">
            <a class="nav-link nav-link-icon text-center" v-d-toggle.notifications>
                <div class="nav-link-icon__wrapper">
                    <i class="material-icons">&#xE7F4;</i>
                    <d-badge v-if="notifications.new" pill theme="danger">{{notifications.new}}</d-badge>
                </div>
            </a>
            <d-collapse id="notifications" class="dropdown-menu dropdown-menu-small">
                <d-dropdown-item v-for="(noti, key) in notifications.data" :key="key">
                    <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                            <i class="material-icons">info</i>
                        </div>
                    </div>
                    <div class="notification__content">
                        <span class="notification__category">Notifications - {{noti.createdAt}}</span>
                        <p v-html="noti.n_data"></p>
                    </div>
                </d-dropdown-item>
                <d-dropdown-item class="notification__all text-center">
                    <a v-on:click="clearNotifications">Clear Notifications</a>
                </d-dropdown-item>
            </d-collapse>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-nowrap px-3 d-flex align-items-center"  v-d-toggle.user-actions>
                <avatar :src="user.u_avatar!==0?this.$ApiCons.APP_URL+user.u_avatar:null" :size="40" inline
                        :username="!user.u_name?'CA':user.u_name"></avatar>
                <span v-if="user" class="ml-2 d-none d-md-inline-block">{{!user.u_gender==='M' ? 'Hi, Mr.':'Hi, '}}{{user.u_name.split(' ')[0]}}</span>
            </a>
            <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small">
                <d-dropdown-item href="/profile"><i class="material-icons">&#xE7FD;</i> Profile</d-dropdown-item>
                <d-dropdown-item href="/testimony"><i class="material-icons">&#xE8B8;</i> Testimonies</d-dropdown-item>
                <d-dropdown-item><i class="material-icons">&#xE2C7;</i> Community</d-dropdown-item>
                <d-dropdown-item><i class="material-icons">&#xE896;</i> Online Giving</d-dropdown-item>
                <d-dropdown-divider/>
                <d-dropdown-item href="/logout" class="text-danger">
                    <i class="material-icons text-danger">&#xE879;</i> Logout
                </d-dropdown-item>
            </d-collapse>
        </li>
    </d-navbar-nav>
</template>

<style>
    .nav-link:hover {
        cursor: pointer;
    }
</style>
<script>
  import Avatar from 'vue-avatar';
  import { mapState } from 'vuex';

  export default {
    components: {
      Avatar
    },
    data() {
      return {
        placeholder: require('@/assets/images/avatars/0.png'),
      };
    },
    computed: mapState(['user', 'notifications']),
    methods: {
      clearNotifications() {
        let api = new this.$Api(this);
        api.userClearNotifications();
      }
    }
  };
</script>
