import Vue from 'vue';
import Router from 'vue-router';
//New Import views
import Test from './views/rough/ComponentsOverview';
import MainLayout from './layouts/Default';
import PlainLayout from './layouts/PlainLayout';
import Errors from './views/Errors';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import ResetView from './views/Reset';
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
      path: '/test',
      name: 'test',
      component: Test,
      meta: { title: 'test' }
    },
    {
      path: '/',
      component: PlainLayout,
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
          meta: { title: 'Login' }
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView,
          meta: { title: 'Register' }
        },
        {
          path: '/reset',
          name: 'reset',
          component: ResetView,
          meta: { title: 'Reset' }
        }
      ]
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
