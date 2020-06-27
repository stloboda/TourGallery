export const state = () => ({
  tours: []
});

export const mutations = {
  setTours(state, tours) {
    state.tours = tours
  }
};

export const actions = {
  async fetch({commit}) {
    const tours = await this.$axios.$get('/tours');
    commit('setTours', tours)
  }
};

export const getters = {
  tours: s => s.tours
};
