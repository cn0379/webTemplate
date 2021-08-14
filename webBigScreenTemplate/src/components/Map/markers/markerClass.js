/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-17 09:06:50
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 13:24:00
 */
import gdMap from '../amap/index.js'
export default class Marker {
  /**
   * @param { String } name 自定义类型名称
   * @param { Object } markerProperties 自定义marker样式 必须是高德地图marker中的属性
   * @param { Func } markerClickFunc 点击事件 返回 当前点击的marker参数
   * @return {*}
   */
  constructor(name, markerProperties, markerClickFunc) {
    this.name = name
    this.markerProperties = Object.assign({
      zIndex: 1,
      offset: new AMap.Pixel(0, 0),
      content: null,
      icon: null
    }, markerProperties)
    this.markerClickFunc = markerClickFunc
    this.aMapMarkerList = [] // 保存所有的amapmarker对象
  }
  /**
   * @name: 添加markers
   * @param {Array | Object} markers 添加的单个markers或多个markers
   * @return {Void}
   */
  addMarks(markers) {
    if (Array.isArray(markers)) {
      markers.forEach(item => {
        setAMapMarker.call(this, item)
      })
    } else {
      setAMapMarker.call(this, markers)
    }
    /**
     * @name: 创建amapMarker对象
     * @param { Object } marker 自定义属性
     * @return { Object } 创建后的amapMarker
     */
    function setAMapMarker(marker) {
      const { position, title } = marker
      const that = this
      console.log(' this.aMapMarkerList: ', this.aMapMarkerList)
      // 根据title 与坐标 保证唯一性
      const index = this.aMapMarkerList.findIndex((item) => {
        return item.w.extData.title === title &&
        item.w.extData.position[0] === position[0] &&
        item.w.extData.position[1] === position[1]
      })
      if (index !== -1) return
      const aMapmarker = new AMap.Marker({
        position, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title,
        ...this.markerProperties,
        extData: marker
      })
      if (that.markerClickFunc) {
        aMapmarker.on('click', () => {
          that.markerClickFunc(marker)
        })
      }

      aMapmarker.setMap(gdMap.map)
      this.aMapMarkerList.push(aMapmarker)
      return aMapmarker
    }
  }
  /**
   * @name: 删除markers
   * @param {Array | String} markerTitles 删除的单个markers或多个markers的title
   * @return {*}
   */
  removeMarks(markerTitles) {
    if (Array.isArray(markerTitles)) {
      markerTitles.forEach(item => {
        removeMarker.call(this, item)
      })
    } else {
      removeMarker.call(this, markerTitles)
    }
    /**
     * @name: 删除 aMapMarkerList title对应的第一个元素
     * @param { String } title 名称
     * @return {Void}
     */
    function removeMarker(title) {
      const index = this.aMapMarkerList.findIndex((item) => item.w.extData.title === title)
      if (index === -1) {
        console.error(`${this.name}中没有title为${title}的元素`)
      } else {
        this.aMapMarkerList[index].setMap(null)
        this.aMapMarkerList.splice(index, 1)
      }
    }
  }
  // 隐藏所有markers
  hideMarks() {
    this.aMapMarkerList.forEach(item => {
      item.setMap(null)
    })
  }
  // 显示所有markers
  showMarks() {
    this.aMapMarkerList.forEach(item => {
      item.setMap(gdMap.map)
    })
  }
  // 清空所有markers
  emptyMarks() {
    if (!this.aMapMarkerList.length) return
    this.aMapMarkerList.forEach(item => {
      item.setMap(null)
    })
    this.aMapMarkerList = []
  }
}

