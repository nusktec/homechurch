import Vue from 'vue';
import Router from 'vue-router';
//New Import views
import MainLayout from './layouts/Default';
import Errors from './views/Errors';
import LoginView from './views/Login';
import UserProfileView from './views/UserProfile';

//ThirdParty library
import data from './data';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    //main application
    {
      path: '/',
      component: MainLayout,
      redirect: '/profile',
      beforeEnter: (req, res, next) => {
        if (data.auth.isLogin() && !data.auth.isAdminRole()) {
          next();
        }
        next({ name: 'login' });
      },
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: UserProfileView,
          meta: {
            title: 'Profile',
            isAdmin: false,
          }
        },
      ]
    },
    //Admin Routes
    {
      path: '/admin',
      component: MainLayout,
      redirect: '/admin/dashboard',
      meta: { isAdmin: true },
      beforeEnter: (req, res, next) => {
        if (data.auth.isLogin() && data.auth.isAdminRole()) {
          next();
        }
        next({ name: 'login' });
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: UserProfileView,
          meta: {
            isAdmin: true,
            title: 'Admin'
          }
        },
      ]
    },
    //Error handling
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
