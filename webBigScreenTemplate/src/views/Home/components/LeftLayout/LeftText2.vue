
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:39:59
-->
<template>
  <div style="color:#fff">
    <div @click="addMarker('车辆')">
      添加车辆
    </div>
    <div @click="addMarker2('人员')">
      添加人员
    </div>
    <div @click="toggleMarker('车辆')">
      切换 只显示车辆
    </div>
    <div @click="toggleMarker('人员')">
      切换 只显示人员
    </div>
    <div @click="showMarker('车辆')">
      显示车辆
    </div>
    <div @click="showMarker('人员')">
      显示人员
    </div>
    <div @click="hideMarker('车辆')">
      隐藏车辆
    </div>
    <div @click="hideMarker('人员')">
      隐藏人员
    </div>
    <div @click="removeMarker('车辆')">
      清空车辆图标，数据全部删除
    </div>
    <div @click="removeMarker('人员')">
      删除人员图标，数据全部删除
    </div>
    <div @click="showAll">
      显示所有图标
    </div>
    <div @click="hideAll">
      隐藏所有图标
    </div>
    <div @click="emptyMarker">
      清空所有图标
    </div>
  </div>
</template>

<script>
import gdMap from '@/components/Map/amap/index.js'
import markerBus from '@/components/Map/markers/markerBus.js'
export default {
  name: 'LeftText2',
  created() {
    console.log('text2')
  },
  methods: {
    // 添加车辆marker
    addMarker(name) {
      markerBus.show(name, [{
        position: [120.780137, 31.649123],
        title: name + '测试一2下'
      }, {
        position: [120.700537, 31.649123],
        title: name + '测试一3下'
      }, {
        position: [120.740737, 31.649123],
        title: name + '测试一4下'
      }])
      gdMap.map.setCenter([120.780137, 31.649123])
    },
    // 添加人员marker
    addMarker2(name) {
      markerBus.show(name, [{
        position: [120.880137, 31.649123],
        title: name + '测试一2下'
      }, {
        position: [120.800537, 31.649123],
        title: name + '测试一3下'
      }, {
        position: [120.840737, 31.649123],
        title: name + '测试一4下'
      }])
      gdMap.map.setCenter([120.880137, 31.649123])
    },
    // 切换marker
    toggleMarker(name) {
      markerBus.toggle(name)
    },
    // 显示marker
    showMarker(name) {
      markerBus.show(name)
    },
    // 隐藏marker
    hideMarker(name) {
      markerBus.hide(name)
    },
    // 删除marker
    removeMarker(name) {
      markerBus.removeMarks(name)
    },
    // 显示所有
    showAll() {
      markerBus.showAllMarks()
    },
    // 显示所有
    hideAll() {
      markerBus.hideAllMarks()
    },
    // 清空marker
    emptyMarker() {
      markerBus.removeAllMarks()
    }
  }

}
</script>
