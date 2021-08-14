/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-24 13:20:04
 * @LastEditors: Gin
 * @LastEditTime: 2021-03-09 11:07:21
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
  permissionRoutes: state => state.permission.routes
}
export default getters
