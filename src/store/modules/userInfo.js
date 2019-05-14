import { setToken, removeToken } from '@/utils/auth.js'
import { userLogin } from '@/api/api.js'
import { resetRouter } from '@/router/router'

const userInfo = {
  state: {
    userInfo: {},
    roles: [],
    addRoutes: []
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
    /**
       *    在登陆的时候有需要弹窗短信验证，可以把登陆要设置的内容放在弹窗点击确定时设置一下，把提交放在此文件 列login提交方法
       *    @param {*} data 登陆传参数
       */
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
        resetRouter() // 路由重置
        location.reload()// 退出刷新页面会跳转到登陆页面
        resolve()
      })
    }
  }
}

export default userInfo
