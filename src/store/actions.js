import service from '@/store/service';

export const getList = source => (context, forceUpdate) => {
    if (context.state.list.length > 0 && !forceUpdate) {
        return;
    }

    service.get(`api/${source}`).then((response) => {
        context.commit('setList', response.data);
    });
};

export const update = source => (context, model) => service.put(`api/${source}/${model.id}`);
