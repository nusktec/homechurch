import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: false,
        notifications: [],
        testimonies: false,
        title: 'Home',
        chat: [
            {name: 'User1', msg: 'Hello ?, Iam happy to be here...', img: 'http://emilcarlsson.se/assets/mikeross.png', time: '5m ago', id: 1},
            {name: 'User2', msg: 'Welcome me too, this is a sample message', img: 'http://emilcarlsson.se/assets/mikeross.png', time: '4m ago', id: 2},
            {name: 'User3', msg: 'Blessed to be here too', img: 'http://emilcarlsson.se/assets/mikeross.png', time: '2m ago', id: 1},
            {name: 'User1', msg: 'I love today home cell messages, any one ?', img: 'http://emilcarlsson.se/assets/mikeross.png', time: '1m ago',  id: 3}
        ],
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
        },
        insertChat(state, data){
            state.chat.push(data);
        }
    },
    actions: {},
    getters: {
        getUser: state => {
            return state.user;
        }
    }
});
