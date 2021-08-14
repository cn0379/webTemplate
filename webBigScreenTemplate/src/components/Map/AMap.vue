<!--
 * @name: 高德地图
 * @Author: Gin
 * @Date: 2020-12-16 14:44:23
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:39:03
-->
<template>
  <div id="gdMap" />
</template>

<script>
import gdMap from '@/components/Map/amap/index.js'
export default {
  name: 'Map',
  data() {
    return {
    }
  },
  mounted() {
    gdMap.initMap()
  },
  destroyed() {
    gdMap.map.destroy()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#gdMap {
  z-index: $mapIndex;
  height: $contentHeight;
  background-color: black;
  width: $centerWidth;
  position: absolute;
  left: $leftWidth;
  top: $topHeight;
}
</style>
