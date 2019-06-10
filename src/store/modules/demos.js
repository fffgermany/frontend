import L from 'leaflet';
import moment from 'moment';
import service from '@/store/service';
import { getList, update } from '@/store/actions.js';


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
    }
}

const mutations = {   
    setList(state, val) {
        const icon = L.icon({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            iconSize: [20, 35],
        });

        val.forEach((demo) => {
            demo.latLng = L.latLng(demo.lat, demo.lng);
            demo.icon = icon;
            demo.zeit = moment(demo.zeit).format('YYYY-MM-DDTHH:mm:ss');
        });

        state.list = val;
    },
};

const actions = {
    getList: getList('demo'),

    create(context, model) {
        return service.post('api/demo', model).then(() => {
            context.dispatch('getList', true);
        });
    },

    update: update('demo'),

    delete(context, model) {
        return service.delete(`api/demo/${model.id}`).then(() => {
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
