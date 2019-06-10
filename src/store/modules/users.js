import service from '../service';

const state = {
    apikey: '$2y$10$bgFE03/WU9F/Q3Y4.J/g1OYuUS/8ov8E/EsmNNpR8vf1pYGmzbLq.',
    user: {
        id: 31
    },
};

const getters = {
    getUser: state => () => {
        console.log('state.user.id :', state.user.id);
        if (state.apikey) {
            return state.user;
        }

        return undefined;
    },
};

const mutations = {
    user(state, user) {
        state.user = user;
    },
};

const actions = {
    signup(context, model) {
        return service.post('public/user', model);
    },
  
    signin(context, model) {
        return service.post('api/login', model).then((response) => {
            context.commit('user', response.data);
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
