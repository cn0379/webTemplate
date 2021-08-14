
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 11:23:07
-->
<template>
  <div style="color:#fff">
    <div @click="addMarker">
      添加carmarker222
    </div>
  </div>
</template>

<script>
import carMarker from '@/components/Map//markers/carMarker'
export default {
  name: 'RightText2',
  created() {
    console.log('text2')
  },
  methods: {
    addMarker() {
      carMarker.addMarks([{
        position: [120.780137, 31.699123],
        title: '测试单例'
      }])
    }
  }

}
</script>
