import router from './router/router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // progress 样式
import { getToken } from '@/utils/auth' // 对token操作
import { permission, constantRouterMapLength } from '@/utils/permission'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/', '/login'] //
router.options.routes

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const roles = JSON.parse(sessionStorage.getItem('roles')) // 角色
  const hasToken = getToken()
  if (hasToken && hasToken !== undefined) { // token存在
    if (whiteList.indexOf(to.path) !== -1) { // token存在进入白名单直接跳转
      next()
    } else { // token存判断根据角色生成路由
      // roles 开始 根据角色判断生成动态路由
      if (router.options.routes.length === constantRouterMapLength && roles) { // 判断当前的路由的长度和初始的路由长度，长度相同说明路由没有生成，不同说路由已经加载
        permission(roles).then(res => {
          //   这两行代码顺序不能更改
          router.options.routes = router.options.routes.concat(res) // 不是响应式的
          router.addRoutes(res) // ^ 动态路由添加
          console.log('动态路由已生成')
          next({ ...to, replace: true })
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
    }
  }
})

router.afterEach(() => {
  // 路由完成
  NProgress.done()
})
