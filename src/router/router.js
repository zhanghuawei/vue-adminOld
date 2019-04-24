import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/',
    // component: Layout,
    redirect: '/login', // 重定向地址，在面包屑中点击会重定向去的地址
    hidden: true, // 不在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    meta: { title: 'login', icon: 'lock', roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: () => import('@/views/login/login.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/login.vue'),
        name: 'login',
        meta: {
          title: 'login',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        }
      }
    ]
  },
  {
    path: '/index',
    hidden: true, // 不在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    meta: { title: 'login', icon: 'lock', roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout
  }
]
export const asyncRouterMap = [
  {
    path: '/index',
    hidden: true,
    alwaysShow: true,
    name: '/',
    component: Layout,
    meta: {
      roles: ['admin', 'editor'], // 设置该路由进入的权限，支持多个权限叠加
      title: 'title', // 设置该路由在侧边栏和面包屑中展示的名字
      icon: 'svg-name', // 设置该路由的图标
      noCache: true, // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
      breadcrumb: false // 如果设置为false，则不会在breadcrumb面包屑中显示
    }
  }
]
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: constantRouterMap
})
