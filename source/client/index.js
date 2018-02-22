import Vue from 'vue';

import Root from './root.vue';

const app = new Vue({
  render: h => h(Root),
});

app.$mount('#root');
