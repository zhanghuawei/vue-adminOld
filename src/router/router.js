import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    // redirect: '/login', // 重定向地址，在面包屑中点击会重定向去的地址
    hidden: true, // 不在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    meta: { title: 'login', icon: 'lock', roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: () => import('@/views/login/login.vue')
  }

]
export const asyncRouterMap = [
  {
    path: '/index',
    hidden: false, // 在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    // redirect: '/index/demo',
    meta: { title: '首页', icon: 'lock', roles: ['admin', 'salesman', 'user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout
    // children: [
    //   {
    //     path: '',
    //     meta: {
    //       title: 'login',
    //       icon: 'lock', // 图标
    //       // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
    //       breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
    //       noCache: true // 不会被 <keep-alive> 缓存
    //     },
    //     component: () => import('@/views/layout/index.vue')
    //   }
    // ]
  }, {
    path: '/admin',
    hidden: false, // 在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    redirect: '/admin/index',
    meta: { title: '管理员', icon: 'lock', roles: ['admin', 'salesman', 'user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: 'login',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/admin/admin.vue')
      }
    ]
  }, {
    path: '/salesman',
    hidden: false, // 在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    redirect: '/salesman/index',
    meta: { title: '首页', icon: 'lock', roles: ['salesman'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: 'login',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/salesman/salesman.vue')
      }
    ]
  }, {
    path: '/user',
    hidden: false, // 在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    redirect: '/user/index',
    meta: { title: '首页', icon: 'lock', roles: ['user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: 'login',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/user/user.vue')
      }
    ]
  }, {
    path: '/index/demo',
    hidden: false, // 不在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    meta: { title: '测试', icon: 'lock', roles: ['admin', 'salesman', 'user'] },
    component: () => import('@/views/demo/demo.vue')
  }
]
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
