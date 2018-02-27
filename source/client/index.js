import Vue from 'vue';
import Vuex from 'vuex';
import VCalendar from 'v-calendar';

import 'v-calendar/lib/v-calendar.min.css';
import './styles/index.scss';

import Root from './root.vue';
import createStore from './store/';

Vue.use(Vuex);
Vue.use(VCalendar);

const app = new Vue({
  store: createStore(),

  render: h => h(Root),
});

app.$mount('#root');
