import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { baseConfig } from './config.js';
const fetchConfig = (ctx) => {
    
    return Object.assign({ }, baseConfig.fetchConfig);
}

import demos from './modules/demos.js';
import localgroups from './modules/localgroups.js';
import propaganda from './modules/propaganda.js';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    demos,
    localgroups,
    propaganda
  },
  state: {
    user: {
      apikey: '$2y$10$bgFE03/WU9F/Q3Y4.J/g1OYuUS/8ov8E/EsmNNpR8vf1pYGmzbLq.',
      user: {
        id: 31
      }
    },

  },
  mutations: {
    user(state, user) {

      state.user = user;
    }
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

      return  axios
        .post(baseConfig.baseUrl + 'user', model, fetchConfig(context));
    },
    signin(context, model) {

      return  axios
        .post('http://5.230.142.193/api/login', model, fetchConfig(context))
        .then((response) => {

          context.commit('user', response.data);
        });
    }
  },
});
