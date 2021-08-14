/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-22 11:35:52
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 11:38:15
 */
const gdMap = {
  map: {},
  initMap: function() {
    this.map = new AMap.Map('gdMap', {
      // 级别
      zoom: 13,
      // 中心点坐标
      center: [120.760137, 31.649123],
      // 自定义样式
      mapStyle: 'amap://styles/6acd7711560e787cb2223c09ef5de7d4',
      // 使用3D视图
      viewMode: '3D',
      // 展示室内日图
      showIndoorMap: false,
      // 楼层过度动画
      buildingAnimation: true,
      // 地图俯仰角度，有效范围 0 度- 83 度
      pitch: 39
    })
  }
}
export default gdMap
