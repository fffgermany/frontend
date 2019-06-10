import L from 'leaflet';
import { getList, update } from '../actions';
import service from '../service';

const state = {
    list: [],
};

const getters = {
    getItems(state) {
        return state.list;
    },

    getItemByID: state => (ID) => {
        const parsedID = parseInt(ID); 
        return state.list.find(item => item.id === parsedID);
    },
};

const mutations = {
    setList(state, val) {
        state.list = val;
    },
};

const actions = {
    getList: getList('demopropaganda'),

    create(context, model) {
        return service.post('api/demopropaganda', model);
    },

    update: update('demopropaganda'),

    delete(context, model) {
        service.delete(`api/demopropaganda/${model.id}`).then(() => {
            context.dispatch('getList', true);
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
