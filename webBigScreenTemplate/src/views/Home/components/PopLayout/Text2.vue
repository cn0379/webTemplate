
<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 20:13:52
-->
<template>
  <div style="background-color:#ccc;width:1000px;height:500px" @click.self="clear">
    <div>弹出层2 点击关闭Text1</div>
    <el-input v-model="inputVal" placeholder="请输入内容" @mousedown.native.stop="" />
  </div>
</template>

<script>

export default {
  name: 'Text2',
  data() {
    return {
      inputVal: '123'
    }
  },
  created() {
    console.log('text2')
  },
  methods: {
    clear() {
      this.$store.commit('popLayout/CLEAR_POP', 'Text1')
    }
  }

}
</script>
