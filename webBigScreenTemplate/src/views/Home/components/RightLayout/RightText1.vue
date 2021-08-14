
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:40:09
-->
<template>
  <div style="color:#fff;width:1000px;height:500px">
    <div @click="addPersonMarker">
      添加personmarkers
    </div>
    <div @click="removePersonMarker">
      删除personmarkers
    </div>
    <div @click="emptyPersonMarker">
      清空personmarkers
    </div>
  </div>
</template>

<script>
import personMarker from '@/components/Map/markers/personMarker'
export default {
  name: 'RightText1',
  created() {
    console.log('text1')
  },
  methods: {
    addPersonMarker() {
      personMarker.addMarks({
        title: '人员123',
        position: [120.780137, 31.799123]
      })
    },
    removePersonMarker() {
      personMarker.removeMarks('人员123')
    },
    emptyPersonMarker() {
      personMarker.emptyMarks()
    }
  }
}
</script>
