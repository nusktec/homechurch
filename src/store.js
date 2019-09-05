import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    userAdd(state, data) {
      state.user = data;
    }
  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});
