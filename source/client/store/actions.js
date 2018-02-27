import api from '../utils/api';

// eslint-disable-next-line
export async function checkUserID({ commit }, id) {
  this.commit('setUserId', id);

  if (!id || Number.isNaN(Number(id))) {
    return;
  }

  try {
    const { data: stats } = await api.get(`/stats/${id}`);

    this.commit('setUserStats', stats);
  } catch (error) {
    this.commit('userLoadingError');
  }
}
