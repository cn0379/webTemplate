<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-07-06 16:59:24
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-07 10:08:13
-->
<template>
  <div class="add_pack">
    <!--  -->
    <Parser ref="addForm" :form-conf="myFormConf" @submit="submitHandel" />
  </div>
</template>

<script>
import formConf from './formConf.json'
export default {
  name: 'ParserTestAddMoudle',
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    onlyRead: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      validateType: false
    }
  },
  computed: {
    // 经过默认值处理的配置项
    myFormConf() {
      const myFormConf = JSON.parse(JSON.stringify(formConf))
      myFormConf.fields.forEach(item => {
        if (this.formData[item.__vModel__] !== undefined) {
          item.__config__.defaultValue = this.formData[item.__vModel__]
        }

        if (this.onlyRead) {
          item.placeholder = ''
          item.__config__.required = false
        }
      })
      myFormConf.disabled = this.onlyRead
      return myFormConf
    }
  },
  methods: {
    // 判断表单是否通过校验  submitForm 会触发 submitHandel 方法
    rulesHandel() {
      this.$refs.addForm.submitForm()
      return this.validateType
    },
    // 表单验证通过后触发
    submitHandel() {
      this.validateType = true
      // 赋值
      for (const i in this.$refs.addForm.formData) {
        this.$emit('setFormData', i, this.$refs.addForm.formData[i])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add_pack {
  max-height: 600px;
  padding-right: 10px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
