import { getList } from '../actions.js';
import L from 'leaflet'

const state = {
    list: []
};

const getters = {
    getItems(state) {

        return state.list;
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
        });

        state.list = val;
    } 
};

const actions = {
    getList: getList('demo')
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};