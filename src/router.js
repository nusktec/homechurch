import Vue from 'vue';
import Router from 'vue-router';
//New Import views
import MainLayout from './layouts/Default.vue';
import Errors from './views/Errors.vue';
import LoginView from './views/Login.vue';
import HomeView from './views/PersonalBlog.vue';

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
        console.log(res);
        next();
      },
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: HomeView
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
