export function setUserId(state, id) {
  state.user.id = id;
  state.loading.error = false;
  state.loading.loaded = false;
  state.user.statistics = [];
}

export function setUserStats(state, stats) {
  state.user.statistics = stats;
  state.loading.loaded = true;
}

export function userLoadingError(state) {
  state.user.error = true;
  state.loading.loaded = false;
}

export function setTimePeriod(state, { start, end }) {
  state.timePeriod.start = start;
  state.timePeriod.end = end;
}
