import { getList, update } from '../actions.js';
import L from 'leaflet'
import axios from 'axios';

import { baseConfig } from '../config.js';
const fetchConfig = (ctx) => {

    return Object.assign(baseConfig.fetchConfig(ctx), { });
}

const state = {
    list: []
};

const getters = {
    getItems(state) {

        return state.list;
    },
    getItemByID: (state) => (ID) => {

        const parsedID = parseInt(ID);
            
        return state.list.find((item) => item.id === parsedID);
    }
};

const mutations = {
    
    setList(state, val) {

        state.list = val;
    } 
};

const actions = {
    getList: getList('demopropaganda'),
    create(context, model) {

        return axios
            .post('http://5.230.142.193/api/demopropaganda', model, fetchConfig(context))
            .then((response) => {

                // console.log(context, model, response)
            });
    },
    update: update('demopropaganda'),
    delete(context, model) {
        
        return axios
            .delete('http://5.230.142.193/api/demopropaganda/' + model.id, fetchConfig(context))
            .then((response) => {

                // console.log(context, model, response)
                context.dispatch('getList', true);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};