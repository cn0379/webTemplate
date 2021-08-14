/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-16 17:38:57
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 13:46:42
 */
import Marker from './markerClass'
import bus from './markerBus'
const personMarker = new Marker('人员', { content: '<div style="color:#fff;">我是小人</div>' }, function(el) {
  console.log(el)
})
bus.addMarkerType(personMarker)
export default personMarker
