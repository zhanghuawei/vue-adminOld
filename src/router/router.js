import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/layout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/index1",
      component: () => import("@/views/layout/layout.vue")
    },

    {
      path: "/index",
      component: Layout,
      // redirect: "/permission/index", //重定向地址，在面包屑中点击会重定向去的地址
      hidden: true, // 不在侧边栏线上
      alwaysShow: true, //一直显示根路由
      meta: { roles: ["admin", "editor"] }, //你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
      children: [
        {
          path: "",
          component: () => import("@/views/test/test.vue"),
          name: "test",
          meta: {
            title: "test",
            icon: "lock", //图标
            role: ["admin", "editor"], //或者你可以给每一个子路由设置自己的权限
            noCache: true // 不会被 <keep-alive> 缓存
          }
        }
      ]
    }
  ]
});
