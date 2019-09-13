import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false,
    title: 'Home'
  },
  mutations: {
    userAdd(state, data) {
      state.user = data;
    },
    changeTitle(state, data) {
      state.title = data;
    }
  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});
