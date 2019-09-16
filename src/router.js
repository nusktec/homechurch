import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
//New Import views
import Test from './views/rough/ComponentsOverview';
import Test2 from './views/TestPage';
import MainLayout from './layouts/Default';
import PlainLayout from './layouts/PlainLayout';
import Errors from './views/Errors';
import SuccessView from './views/Success';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import ResetView from './views/Reset';
import UserProfileView from './views/UserProfile';

//ThirdParty library
import data from './data';

Vue.use(Router);

const router = new Router({
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
      path: '/test2',
      name: 'test2',
      component: Test2,
      meta: { title: 'test' }
    },
    {
      path: '/',
      component: PlainLayout,
      redirect: '/login',
      beforeEnter: (req, res, next) => {
        if (data.auth.isLogin() && !data.auth.isAdminRole()) {
          next({ name: 'profile' });
        } else if (data.auth.isLogin() && data.auth.isAdminRole()) {
          next({ name: 'dashboard' });
        } else {
          next();
        }
      },
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
        } else {
          next({ name: 'login' });
        }
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
    //Error and success handling
    {
      component: PlainLayout,
      path: '/',
      children: [
        {
          path: '/success',
          name: 'success',
          component: SuccessView,
          meta: { title: 'Success' }
        },
        {
          path: '/errors',
          name: 'errors',
          component: Errors,
          meta: { title: 'Error' }
        },
        {
          path: '/logout',
          name: 'logout',
          component: Errors,
          beforeEnter: (req, res, next) => {
            data.auth.logOut();
            next({ name: 'login' });
          }
        },
        {
          path: '*',
          redirect: '/errors',
        },
      ]
    }
  ],
});
//perform group title changer
router.beforeEach((req, res, next) => {
  store.commit('changeTitle', req.meta.title);
  next();
});
export default router;
