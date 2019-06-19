import request from '@/utils/request'

export function userLogin(data) {
  return request({
    url: '/userLogin',
    method: 'post',
    data: data
  })
}

export function userSubmit(data) {
  return request({
    url: '/userSubmit',
    method: 'post',
    data: data
  })
}
export function salesmanSubmit(data) {
  return request({
    url: '/salesmanSubmit',
    method: 'post',
    data: data
  })
}
