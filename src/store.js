import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false,
    notifications: [],
    testimonies: false,
    title: 'Home'
  },
  mutations: {
    userAdd(state, data) {
      state.user = data;
    },
    changeTitle(state, data) {
      state.title = data;
    },
    updateNotifications(state, data) {
      state.notifications = data;
    },
    updateDp(state, data) {
      state.user.u_avatar = data;
    },
    updateTestimonies(state, data) {
      state.testimonies = data;
    }
  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});
