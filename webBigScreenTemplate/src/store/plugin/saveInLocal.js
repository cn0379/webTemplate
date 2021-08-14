/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:46:42
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-10 10:47:35
 */
// 本地存储
export default store => {
  if (sessionStorage.state) store.replaceState(JSON.parse(sessionStorage.state))
  // 触发vuex更新后执行
  store.subscribe((mutation, state) => {
    sessionStorage.state = JSON.stringify(state)
  })
}
