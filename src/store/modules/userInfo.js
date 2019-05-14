import { setToken, removeToken } from '@/utils/auth.js'
import { userLogin } from '@/api/api.js'

const userInfo = {
  state: {
    userInfo: {},
    roles: []
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    },
    SET_ROLES: (state, roles) => {
      sessionStorage.setItem('roles', JSON.stringify(roles))
      state.roles = JSON.parse(sessionStorage.getItem('roles'))
    },
    CLAER_USERINFO: (state) => {
      sessionStorage.clear()
      state.userInfo = {}
    }
  },

  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        userLogin(data).then(response => {
          commit('SET_USERINFO', response.data)
          commit('SET_ROLES', response.data.roles)
          setToken(response.data.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    quit({ commit }, data) {
      return new Promise((resolve, reject) => {
        removeToken()
        commit('CLAER_USERINFO')
        resolve()
      })
    }
  }
}

export default userInfo
