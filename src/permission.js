import router from './router/router'
import store from './store'
import { Message } from 'element-ui'
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
      NProgress.done()
    } else { // token存判断根据角色生成路由
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err)
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
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
