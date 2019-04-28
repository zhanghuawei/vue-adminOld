import { asyncRouterMap } from '@/router/router'

export function permission(roles) {
  return new Promise(resolve => {
    const arr = []
    debugger
    asyncRouterMap.forEach(route => {
      const role = roles.some(role => route.meta.roles.includes(role))
      if (role) {
        arr.push(route)
      }
    })
    resolve(arr)
  })
}
