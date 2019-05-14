import router from './router/router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // progress 样式
import { getToken } from '@/utils/auth' // 对token操作
import { constantRouterMapLength } from '@/utils/permission'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // 路由白名单
router.beforeEach((to, from, next) => {
  console.log(111)
  NProgress.start()
  const roles = JSON.parse(sessionStorage.getItem('roles')) || []
  const hasToken = getToken() || ''
  if (hasToken && hasToken !== 'undefined') { // token存在
    if (whiteList.indexOf(to.path) !== -1) { // token存在进入白名单直接跳转
      next()
    } else { // token存判断根据角色生成路由
      if (router.options.routes.length === whiteList.length && roles) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GenerateRoutes', roles).then((res) => {
          router.options.routes = router.options.routes.concat(res)
          router.addRoutes(res)
          console.log('路由已生成')
          next(to.path)
        })
      } else {
        if (router.options.routes.length === constantRouterMapLength) {
          next('/login')
        }
        next()
      }
      // roles 介绍
      // 如果是返回的是路由没有角色 直接 next() 在登陆的时候路由已生成 在stroe userInfo.js中
      // netx()
    }
  } else { // token不存在
    if (whiteList.indexOf(to.path) !== -1) { // 白名单路由判断
      next()
    } else { // token不存在跳转主页
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 路由完成
  NProgress.done()
})
