import router from './router'
import store from './store/index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import { Message } from 'element-ui'

import { getToken, getRoles } from '@/utils/ .js' // 获取token

let whitelist = ['/login', '/register', '/success', '/find_password'] // 无需登录即可进入的路由白名单
console.log('AAAA' + router)
router.beforeEach((to, from, next) => {
  console.log('0')
  NProgress.start()
  let TokenKey = getToken()
  if (TokenKey && TokenKey != 'undefined') {
    // 如果登录后的首次跳转，根据用户角色判断该跳转的首页
    if (to.path === '/dashboard') {
      switch (store.getters.roles) {
        case 'admin':
          next('/admin')
          break
        case 'operator':
          next('/operator')
          break
        default:
          next('/supplier')
          break
      }
    }
    if (store.getters.addRouters.length === 0) {
      // 根据用户权限动态生成路由表
      store.dispatch('GenerateRoutes', getRoles()).then(() => {
        console.log('动态路由表已生成')
        // 将生成的路由表添加进固定路由里
        router.addRoutes(store.getters.addRouters)
        // hack方法，确保addRouters已加载完成
        // next({ ...to, replace: true})
        next(to.path)
      })
    } else {
      next()
    }
  } else {
    if (whitelist.indexOf(to.path) !== -1) {
      console.log('2')
      next() // 必须resolve beforeEach
    } else {
      console.log('1')
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
