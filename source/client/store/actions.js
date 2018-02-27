import api from '../utils/api';

export async function checkUserID({ commit }, id) {
  commit('setUserId', id);

  if (!id || Number.isNaN(Number(id))) {
    return;
  }

  try {
    const { data: stats } = await api.get(`/stats/${id}`);

    commit('setUserStats', stats.filter(({ event }) => ['LINK_VISITOR', 'REGISTRATION', 'PAYMENT'].includes(event)));
  } catch (error) {
    commit('userLoadingError');
  }
}

export function checkTimePeriod({ commit }, { start, end }) {
  commit('setTimePeriod', { start, end });
}
