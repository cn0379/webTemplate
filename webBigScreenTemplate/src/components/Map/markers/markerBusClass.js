/*
 * @name:控制所有marker的类
 * @Author: Gin
 * @Date: 2020-12-18 14:38:13
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 13:48:56
 */
export default class MarkerBus {
  constructor() {
    this.markerTypeList = [] // 存放所有类型的marker实例
  }
  /**
   * @name: 添加marker类型
   * @param {Object} markerClass   marker类实例
   * @return {Void}
   */
  addMarkerType(markerClass) {
    this.markerTypeList.push(markerClass)
  }
  /**
   * @name: 显示
   * @param {String} name marker类型名称
   * @param {Object | Array} markers 添加的marker 非必填
   * @return {Void}
   */
  show(name, markers) {
    const markerClass = this.markerTypeList.find(item => item.name === name)
    markerClass.showMarks()
    if (markers) {
      markerClass.addMarks(markers)
    }
  }
  // 显示所有marker
  showAllMarks() {
    this.markerTypeList.forEach(marker => {
      marker.showMarks()
    })
  }
  /**
   * @name: 隐藏
   * @param {String} name marker类型名称
   * @return {Void}
   */
  hide(name) {
    const markerClass = this.markerTypeList.find(item => item.name === name)
    markerClass.hideMarks()
  }
  // 隐藏所有
  hideAllMarks() {
    this.markerTypeList.forEach(marker => {
      marker.hideMarks()
    })
  }
  /**
   * @name: 切换显示类型  并不会删除其他类型实例中的点坐标数据  如果需要彻底清除请调用 removeAll 然后 使用show方法添加坐标
   * @param {String} name marker类型名称
   * @return {Void}
   */
  toggle(name) {
    const markerClass = this.markerTypeList.find(item => item.name === name)
    this.markerTypeList.forEach(marker => {
      marker.hideMarks()
    })
    markerClass.showMarks()
  }
  /**
   * @name: 直接删除某个类型的marker数据
   * @param {String} name marker类型名称
   * @return {Void}
   */
  removeMarks(name) {
    const markerClass = this.markerTypeList.find(item => item.name === name)
    markerClass.emptyMarks()
  }
  /**
   * @name: 直接删除所有类型的marker数据
   * @return {Void}
   */
  removeAllMarks() {
    this.markerTypeList.forEach(marker => {
      marker.emptyMarks()
    })
  }
}
