import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken, getRoles, setRoles, removeRoles } from '@/utils/token'

const user = {
  state: {
    token: getToken(),
    name: '',
    roles: getRoles()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const loginName = userInfo.loginName.trim()
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            if (response.code === '000000') {
              const data = response.data
              setToken(data.token)
              commit('SET_TOKEN', data.token)
              commit('SET_NAME', loginName)
              setRoles(data.roles)
              commit('SET_ROLES', data.roles)
              resolve(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', '')
            removeToken()
            removeRoles()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
export default user
