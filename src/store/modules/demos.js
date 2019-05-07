import { getList, update } from '../actions.js';
import L from 'leaflet'
import axios from 'axios';
import moment from 'moment';

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

        const icon = L.icon({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            iconSize: [20, 35],
         })

        val.forEach((demo) => {
            demo.latLng = L.latLng(demo.lat, demo.lng);
            demo.icon = icon;
            demo.zeit = moment(demo.zeit).format('YYYY-MM-DDTHH:mm:ss');
        });

        state.list = val;
    } 
};

const actions = {
    getList: getList('demo'),
    create(context, model) {

        return axios
            .post('http://5.230.142.193/api/demo', model, fetchConfig(context))
            .then((response) => {

                context.dispatch('getList', true);
            });
    },
    update: update('demo'),
    delete(context, model) {
        
        return axios
            .delete('http://5.230.142.193/api/demo/' + model.id, fetchConfig(context))
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