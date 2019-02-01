import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout'
import Login from '@/views/login'

Vue.use(Router);

export default new Router({
    routes: [
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
            path: '/demo',
            name: 'home',
            asideShow: true,
            component: Layout,
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
            children: [
                {
                    path: '',
                    component: () => import('@/views/demo/About')
                }
            ]
        }
    ]
});
