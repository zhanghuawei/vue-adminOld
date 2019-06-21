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
    name: 'Layout',
    hidden: false, // 在侧边栏线上 false显示 true隐藏
    alwaysShow: false, // 是否显示下拉菜单，true显示 false不显示 为false时子路由hidden和meta都可以去掉
    meta: { title: '首页', icon: 'iconfont iconhome-alt', roles: ['admin', 'salesman', 'user'] }, // roles 路由权限配置
    component: Layout,
    children: [
      {
        path: '', // 默认路由
        hidden: false,
        meta: { //
          title: '首页',
          icon: 'lock', // 图标
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: false // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/layout/index.vue')
      }
    ]
  }, {
    path: '/admin',
    hidden: false,
    alwaysShow: true,
    meta: { title: '管理员', icon: 'iconfont iconguanliyuan', roles: ['admin'] },
    component: Layout,
    children: [
      {
        path: '',
        hidden: false,
        name: 'index',
        meta: {
          title: '管理员一',
          icon: 'lock',
          breadcrumb: false,
          noCache: true
        },
        component: () => import('@/views/admin/adminOne.vue')
      }, {
        path: 'index2',
        name: 'index2',
        meta: {
          title: '管理员二',
          icon: 'lock',
          breadcrumb: false,
          noCache: true
        },
        component: () => import('@/views/admin/adminTwo.vue')
      }
    ]
  }, {
    path: '/salesman',
    hidden: false,
    alwaysShow: false,
    redirect: '/salesman/index',
    meta: { title: '业务员', icon: 'iconfont iconguanliyuan', roles: ['salesman'] },
    component: Layout,
    children: [
      {
        path: '/salesman/index',
        meta: {
          title: 'login',
          icon: 'lock',
          breadcrumb: false,
          noCache: true
        },
        component: () => import('@/views/salesman/salesman.vue')
      }
    ]
  }, {
    path: '/user',
    hidden: false,
    alwaysShow: false,
    redirect: '/user/index',
    meta: { title: '用户', icon: 'iconfont iconguanliyuan', roles: ['user'] },
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: 'login',
          icon: 'lock',
          breadcrumb: false,
          noCache: true
        },
        component: () => import('@/views/user/user.vue')
      }
    ]
  }, {
    path: '/Documents',
    hidden: false,
    alwaysShow: false,
    meta: { title: 'Documents', icon: 'iconfont iconceshi', roles: ['admin', 'salesman', 'user'] },
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: '登录',
          icon: 'lock',
          breadcrumb: false,
          noCache: false
        },
        component: () => import('@/views/documents/documents.vue')
      }
    ]
  }, {
    path: '/vue',
    hidden: false,
    alwaysShow: false,
    meta: { title: 'VUE', icon: 'iconfont iconceshi', roles: ['admin', 'salesman', 'user'] },
    component: Layout,
    children: [
      {
        path: '',
        name: 'VUE',
        meta: {
          title: 'VUE',
          icon: 'lock',
          breadcrumb: false,
          noCache: false
        },
        component: () => import('@/views/vue/vue.vue')
      }
    ]
  }, {
    path: '/demo',
    hidden: false,
    alwaysShow: false,
    meta: { title: '测试', icon: 'iconfont iconceshi', roles: ['admin', 'salesman', 'user'] },
    component: Layout,
    children: [
      {
        path: '',
        name: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'lock',
          breadcrumb: false,
          noCache: false
        },
        component: () => import('@/views/demo/demo.vue')
      }
    ]
  }
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
