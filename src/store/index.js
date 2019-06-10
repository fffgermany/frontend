import Vue from 'vue';
import Vuex from 'vuex';

import service from '@/store/service';

import demos from './modules/demos';
import localgroups from './modules/localgroups';
import propaganda from './modules/propaganda';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  modules: {
    demos,
    localgroups,
    propaganda,
  },

  state: {
    user: {
      apikey: '$2y$10$bgFE03/WU9F/Q3Y4.J/g1OYuUS/8ov8E/EsmNNpR8vf1pYGmzbLq.',
      user: {
        id: 31
      },
    },

  },

  mutations: {
    user(state, user) {
      state.user = user;
    },
  },

  getters: {
    getUser: (state) => () => {
      if (state.user.apikey) {
        return state.user;
      } 
      
      return undefined;
    }
  },

  actions: {
    signup(context, model) {
      return service.post('public/user', model);
    },

    signin(context, model) {
      return service.post('api/login', model)
        .then((response) => {
          context.commit('user', response.data);
        })
    }
  },
});
