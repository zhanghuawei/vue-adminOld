import { asyncRouterMap } from '@/router/router'

export function permission(roles) {
  return new Promise(resolve => {
    const arr = []
    asyncRouterMap.forEach(route => {
      const amp = { ...route }
      const role = roles.some(role => amp.meta.roles.includes(role))
      if (role) {
        arr.push(amp)
      }
    })
    resolve(arr)
  })
}
