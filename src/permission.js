import router from './router/router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // progress 样式
import { getToken } from '@/utils/auth' // 对token操作

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/', '/login'] //
router.beforeEach(async(to, from, next) => {
  debugger
  const hasToken = getToken()
  if (hasToken && hasToken !== undefined) {
    console.log(111)
  }
  NProgress.start()
  next()
})

router.afterEach(() => {
  // 路由完成
  NProgress.done()
})
