import { getList, update } from '../actions.js';
import { setState } from '../mutations.js';
import L from 'leaflet'

const state = {
    list: []
};

const getters = {
    getItems(state) {

        return state.list;
    },
    getItemByRelatedModel: (state) => (relatedModel) => {

        return state.list.find((item) => item && item.id === relatedModel.ortsgruppe_id);
    }
};

const mutations = {
    
    setList: setState()
};

const actions = {
    getList: getList('ortsgruppe'),
    update: update('ortsgruppe')
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};