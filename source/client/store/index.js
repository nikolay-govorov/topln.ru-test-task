import { Store } from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export default () => new Store({
  state: {
    loading: {
      error: false,
      loaded: false,
    },

    timePeriod: {
      start: null,
      end: null,
    },

    user: {
      id: null,
      statistics: [],
    },
  },

  actions,
  getters,
  mutations,
});
