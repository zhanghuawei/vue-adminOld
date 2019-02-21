import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store/index'
//  import { getToken } from '@/utils/token'

// 创建axios实例
const http = axios.create({
    baseURL: 'https://easy-mock.com/mock/5c63c8fa2ecb0b58465e3470/vue-admin', timeout: 6000 // 请求超时时间
})

// 拦截器可以在.then()或者.catch()之前对请求/返回的数据进行处理
// requeset 拦截器
http.interceptors.request.use(
    // 请求发送之前做一些配置，做一些事, 让每个请求携带token
    config => {
        console.log('请求参数: ' + JSON.stringify(config.data))
        if (store.getters.token) {
            //  config.headers['X-Token'] = getToken()
        }
        return config
    },
    // 请求出错时的统一处理
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// response拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        // 状态码非1均为异常状态
        if (res.code !== '000000') {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            })
            // 判断出token异常的状态码，然后做出登出动作
            if (res.code === '5000' || res.code === '5001') {
                MessageBox.confirm(
                    '您已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    store.dispatch('LogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            // return Promise.reject(new Error('响应状态码不为1'))
            return Promise.reject(new Error('响应码不为1'))
        } else {
            return response.data
        }
    },
    error => {
        console.log('error:' + error)
        Message({
            message: error.message,
            type: 'error',
            durations: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default http
