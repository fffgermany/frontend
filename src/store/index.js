import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { baseConfig } from './config.js';
const fetchConfig = (ctx) => {
    
    return Object.assign({ }, baseConfig.fetchConfig);
}

import demos from './modules/demos.js';
import localgroups from './modules/localgroups.js';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    demos,
    localgroups
  },
  state: {
    user: {}
  },
  mutations: {
    user(state, user) {

      state.user = user;
    }
  },
  getters: {
    getUser(state) {

      if (state.user.id) {
        return state.user;
      } 
      
      return undefined;
    }
  },
  actions: {
    signup(context, model) {

      return  axios
        .post(baseConfig.baseUrl + 'user', fetchConfig(context), model);
    },
    signin(context, model) {

      return  axios
        .post(baseConfig.baseUrl + 'login', fetchConfig(context), model)
        .then((response) => {

          context.commit('user', response.data);
        });
    }
  },
});
