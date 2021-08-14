/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-16 17:39:06
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 13:30:18
 */
import Marker from './markerClass'
import bus from './markerBus'
import carIcon from '@/assets/AMap/car_icon.png'
const carMarker = new Marker('车辆', { icon: carIcon }, function(el) {
  console.log(el)
})
bus.addMarkerType(carMarker)

export default carMarker
