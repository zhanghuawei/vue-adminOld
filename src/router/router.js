import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '',
    redirect: '/login' // 重定向地址，在面包屑中点击会重定向去的地址
  }, {
    path: '/login',
    meta: { title: 'login', icon: 'lock', roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: () => import('@/views/login/login.vue')
  }

]
export const asyncRouterMap = [
  {
    path: '/dashboard',
    redirect: '/dashboard/index',
    name: 'Layout',
    hidden: false,
    alwaysShow: true, // 一直显示根路由
    meta: { title: '首页', icon: 'iconfont iconhome-alt', roles: ['admin', 'salesman', 'user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        meta: {
          title: 'login',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: false // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/layout/index.vue')
      }
    ]
  }, {
    path: '/demo',
    redirect: '/demo/index',
    hidden: false,
    alwaysShow: true, // 一直显示根路由
    meta: { title: '测试', icon: 'iconfont iconceshi', roles: ['admin', 'salesman', 'user'] },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: false // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/demo/demo.vue')
      }
    ]
  }, {
    path: '/admin',
    redirect: '/admin/index',
    hidden: false, // 在侧边栏线上
    alwaysShow: false, // 一直显示根路由
    meta: { title: '管理员', icon: 'iconfont iconguanliyuan', roles: ['admin', 'salesman', 'user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: '管理员一',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/admin/adminOne.vue')
      }, {
        path: 'index2',
        meta: {
          title: '管理员二',
          icon: 'lock', // 图标
          // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: true // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/admin/adminTwo.vue')
      }
    ]
  }
// {
//     path: '/salesman',
//     hidden: false, // 在侧边栏线上
//     alwaysShow: true, // 一直显示根路由
//     // redirect: '/salesman/index',
//     meta: { title: '业务员', icon: 'lock', roles: ['salesman'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
//     component: Layout,
//     children: [
//       {
//         path: '/salesman/index',
//         meta: {
//           title: 'login',
//           icon: 'lock', // 图标
//           // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
//           breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
//           noCache: true // 不会被 <keep-alive> 缓存
//         },
//         component: () => import('@/views/salesman/salesman.vue')
//       }
//     ]
//   }, {
//     path: '/user',
//     hidden: false, // 在侧边栏线上
//     alwaysShow: true, // 一直显示根路由
//     redirect: '/user/index',
//     meta: { title: '用户', icon: 'lock', roles: ['user'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
//     component: Layout,
//     children: [
//       {
//         path: '',
//         meta: {
//           title: 'login',
//           icon: 'lock', // 图标
//           // role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
//           breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
//           noCache: true // 不会被 <keep-alive> 缓存
//         },
//         component: () => import('@/views/user/user.vue')
//       }
//     ]
//   }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

// export default new Router({
//   // mode: 'history',
//   // base: process.env.BASE_URL,
//   routes: constantRouterMap
// })
