const app = {
  state: {
    sidebarToggle: false
  },

  mutations: {
    SET_sidebarToggle: state => {
      state.sidebarToggle = !state.sidebarToggle
    }
  },

  actions: {
    sidebarToggle({ commit }) {
      commit('SET_sidebarToggle')
    }
  }

}

export default app
