import 'leaflet/dist/leaflet.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/assets/style.css';

import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
