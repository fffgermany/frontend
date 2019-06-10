import axios from 'axios';
import store from '@/store';

const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
});

service.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${store.state.user.apikey}`;
        return config;
    },
    error => Promise.reject(error),
);

export default service;
