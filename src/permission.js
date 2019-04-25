import router from './router/router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // progress 样式
import { getToken } from '@/utils/auth' // 对token操作

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/', '/login'] //
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  debugger
  const hasToken = getToken()
  if (hasToken && hasToken !== undefined) { // token存在
    if (whiteList.indexOf(to.path) !== -1) { // token存在进入白名单直接跳转
      next()
    } else { // token存判断根据角色生成路由
      next('/')
    }
  } else { // token不存在
    if (whiteList.indexOf(to.path) !== -1) { // 白名单路由判断
      next()
    } else { // token不存在跳转主页
      next('/')
    }
  }
})

router.afterEach(() => {
  // 路由完成
  NProgress.done()
})
