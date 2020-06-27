export const state = () => ({
  planes: []
});

export const mutations = {
  setPlanes(state, planes) {
    state.planes = planes
  }
};

export const actions = {
  async fetch({commit}) {
    const planes = await this.$axios.$get('/plane');
    commit('setPlanes', planes)
  }
};

export const getters = {
  planes: s => s.planes
};
