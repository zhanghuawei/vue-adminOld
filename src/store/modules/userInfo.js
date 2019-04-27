import { setToken, getToken, removeToken } from '@/utils/auth.js'
import { userLogin } from '@/api/api.js'

const userInfo = {
  state: {
    loginName: '',
    roles: '',
    token: getToken()
  },

  mutations: {
    SET_NAME: (state, loginName) => {
      state.loginName = loginName
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }

  },

  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        debugger
        userLogin(data).then(response => {
          commit('SET_NAME', response.loginName)
          commit('SET_TOKEN', response.token)
          commit('SET_ROLES', response.roles)
          setToken(response.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    quit({ commit }, data) {
      return new Promise((resolve, reject) => {
        removeToken()
        sessionStorage.clear()
      })
    }
  }
}

export default userInfo
