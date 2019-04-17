import axios from 'axios';

import { baseConfig } from './config.js';
const fetchConfig = (ctx) => {
    
    return Object.assign({ }, baseConfig.fetchConfig);
}

/**
 * @description This creates an async request to the REST API to get a list of entities
 *
 * @param {string} source - REST API source
 *
 * @param {object} context - module context
 *
 * @returns
 */

export const getList = (source) => (context) => {

    axios
        .get(baseConfig.baseUrl + source, fetchConfig(context))
        .then((res) => {
            context.commit('setList', res.data);
        })
        .catch((err) => {
                axios.get('./demos.json')
                    .then((res) => {

                        context.commit('setList', res.data);
                    })            
        })
};