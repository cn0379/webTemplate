
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-22 11:25:38
-->
<template>
  <div style="color:#fff;height:500px">
    <div @click="pewviewImg">
      预览图片
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftText3',
  created() {
    console.log('text1')
  },
  methods: {
    pewviewImg() {
      this.$store.commit('previewImg/SET_PREVIEW_IMG_URL', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
    }
  }

}
</script>
