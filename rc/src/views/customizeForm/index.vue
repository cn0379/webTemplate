<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-04-15 10:08:06
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:20:25
-->
<template>
  <div>
    <!--  -->
    <el-row :gutter="10">
      <el-col :span="12">
        <!-- https://mrhj.gitee.io/form-generator/#/ -->
        <!-- 通过上面网址获取json后直接导入进来 -->
        <Parser ref="parser" :form-conf="formConf" @submit="sumbitForm1" />
        <el-button type="primary" @click="submit">
          提交
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Parser from 'form-gen-parser'
import formConf from './formConf.json'
export default {
  name: '',
  components: {
    Parser
  },
  data() {
    return {
      formConf
    }
  },
  methods: {
    sumbitForm1(data) {
      console.log('data: ', data)
    },
    submit() {
      this.$refs.parser.submitForm()
    }
  }
}
</script>

<style lang="scss" scoped>
// do something...
</style>
