import Vue from 'vue';
import Vuex from 'vuex';

import './styles/index.scss';

import Root from './root.vue';
import createStore from './store/';

Vue.use(Vuex);

const app = new Vue({
  store: createStore(),

  render: h => h(Root),
});

app.$mount('#root');
