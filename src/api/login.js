import Http from '@/utils/http'
export function login(data) {
  return Http({
    method: 'post',
    url: '/login',
    data: data
  })
}
