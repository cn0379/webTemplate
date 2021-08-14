
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:39:51
-->
<template>
  <div style="color:#fff;height:500px">
    <div @click="setMapCenter">
      改变地图位置
    </div>
  </div>
</template>

<script>
import gdMap from '@/components/Map/amap/index.js'
export default {
  name: 'LeftText1',
  created() {
    console.log('text1')
  },
  methods: {
    setMapCenter() {
      gdMap.map.setCenter([116, 39])
    }
  }

}
</script>
