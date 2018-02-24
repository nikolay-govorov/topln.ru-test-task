import { Store } from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export default () => new Store({
  state: {},

  actions,
  getters,
  mutations,
});
