import { constantRouterMap, asyncRouterMap } from '@/router/router'

/**
 * 通过meta.role普安段是否与当前的用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.role.includes(role))
  } else {
    return true
  }
}
