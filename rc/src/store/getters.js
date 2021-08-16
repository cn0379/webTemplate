/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:41:30
 * @LastEditors: Gin
 * @LastEditTime: 2021-03-08 17:28:02
 */
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permissionRoutes: state => state.permission.routes,
  presentRoutes: state => state.permission.presentRoutes,
  errorLogs: state => state.errorLog.logs,
  roleTypeId: state => state.user.roleTypeId,
  currentDistrictId: state => state.user.currentDistrictId,
  neighborhoodName: state => state.user.neighborhoodName,
  userId: state => state.user.userId
}
export default getters
