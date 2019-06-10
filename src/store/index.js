import Vue from 'vue';
import Vuex from 'vuex';

import demos from './modules/demos';
import localgroups from './modules/localgroups';
import propaganda from './modules/propaganda';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,

    modules: {
        demos,
        localgroups,
        propaganda,
        users,
    },
});
