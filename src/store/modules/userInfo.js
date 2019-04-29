import { setToken, removeToken } from '@/utils/auth.js'
import { userLogin } from '@/api/api.js'
import router, { resetRouter } from '@/router/router'

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
        debugger
        userLogin(data).then(response => {
          commit('SET_USERINFO', response.data)
          commit('SET_ROLES', response.data.roles)
          setToken(response.token)
          /**
           *    1. 有角色返回，在./permission对角色进行判断生成动态路由
           *    2. 没有角色，根据用户直接返回相应的路径一下两行代码需要放开，关于角色的代码需要注释^。
           *        在./permission文件注释中带roles都需要注释
           * 这两行代码顺序不能更改
           */
          // router.options.routes = router.options.routes.concat(response.data.routers) // 不是响应式的
          // router.addRoutes(response.data.routers) // ^ 动态路由添加
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
