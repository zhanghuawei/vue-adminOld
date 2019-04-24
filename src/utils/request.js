import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://rap2api.taobao.org/app/mock/162114',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// request拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 配置token
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '000000') {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      // 处理其他状态 比如会话超时
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm({
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('quit').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    // 错误信息
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
