import api from '../utils/api';

export async function checkUserID({ commit }, id) {
  commit('setUserId', id);

  if (!id || Number.isNaN(Number(id))) {
    return;
  }

  try {
    const { data: stats } = await api.get(`/stats/${id}`);

    commit('setUserStats', stats);
  } catch (error) {
    commit('userLoadingError');
  }
}

export function checkTimePeriod({ commit }, { start, end }) {
  commit('setTimePeriod', { start, end });
}
