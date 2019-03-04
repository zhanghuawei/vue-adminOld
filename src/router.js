import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'login',
    asideShow: true,
    component: Login,
    children: [
      {
        path: '',
        component: () => import('@/views/login/Login')
      }
    ]
  },

  {
    path: '/dashboard',
    name: 'about',
    asideShow: true,
    component: Layout,
    meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true },
    children: [
      {
        path: '',
        component: () => import('@/views/demo/About')
      }
    ]
  }
]
export const asyncRouterMap = [
  {
    path: '/demo',
    name: 'home',
    asideShow: true,
    component: Layout,
    meta: { title: '测试', icon: 'dashboard', noCache: true, affix: true },
    children: [
      {
        path: '',
        component: () => import('@/views/demo/Demo')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    asideShow: true,
    component: Layout,
    meta: { title: '测试2', icon: 'dashboard', noCache: true, affix: true },
    children: [
      {
        path: '',
        component: () => import('@/views/demo/About')
      }
    ]
  }
]
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
