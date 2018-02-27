export function setUserId(state, id) {
  state.user.id = id;
  state.user.error = false;
  state.user.loaded = false;
  state.user.statistics = [];
}

export function setUserStats(state, stats) {
  state.user.statistics = stats;
  state.user.loaded = true;
}

export function userLoadingError(state) {
  state.user.error = true;
  state.user.loaded = false;
}
