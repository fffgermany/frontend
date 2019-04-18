import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import DemoList from './views/DemoList.vue';
import DemoView from './views/DemoView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demos',
      name: 'demoList',
      component: DemoList,
    },
    {
      path: '/demos/:id',
      name: 'demoView',
      component: DemoView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/:demoId?',
      name: 'home',
      component: Home,
    },
  ],
});
