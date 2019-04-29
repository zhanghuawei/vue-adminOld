import { constantRouterMap, asyncRouterMap } from '@/router/router'

export const constantRouterMapLength = constantRouterMap.length

export function permission(roles) {
  return new Promise(resolve => {
    const arr = []
    asyncRouterMap.forEach(route => {
      const role = roles.some(role => route.meta.roles.includes(role))
      if (role) {
        arr.push(route)
      }
    })
    resolve(arr)
  })
}
