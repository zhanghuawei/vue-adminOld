const getters = {
  token: state => state.userInfo.token,
  avatar: state => state.userInfo.avatar,
  name: state => state.userInfo.name,
  introduction: state => state.userInfo.introduction,
  status: state => state.userInfo.status,
  roles: state => state.userInfo.roles,
  setting: state => state.userInfo.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
