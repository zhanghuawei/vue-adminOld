import { setToken, getToken, removeToken } from '@/utils/auth.js'

const userInfo = {
  state: {
    username: ''
  },

  mutations: {
    set_username(state, val) {
      state.username = val
    }
  },

  actions: {
    login({ commit }, data) {
      setToken(data.token)
    }
  }
}

export default userInfo
