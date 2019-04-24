import request from '@/utils/request'

export function userLogin(data) {
  return request({
    url: '/userLogin',
    method: 'post',
    data: data
  })
}
