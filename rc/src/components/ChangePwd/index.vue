<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-20 10:24:56
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 16:41:11
-->
<template>
  <!--  修改密码 -->
  <el-dialog
    title="修改密码"
    :visible.sync="dialogVisible"
    width="450px"
    :destroy-on-close="false"
    :close-on-click-modal="false"
    :modal="false"
    @close="closeHandle"
  >
    <el-form
      ref="amendPsd"
      label-width="80px"
      :model="psdData"
      size="small"
      :rules="rules"
    >
      <el-form-item label="原密码" prop="oldPsd">
        <el-input v-model="psdData.oldPsd" type="password" show-password />
      </el-form-item>
      <el-form-item label="新密码" prop="newPsd">
        <el-input v-model="psdData.newPsd" type="password" show-password />
      </el-form-item>
      <el-form-item label="确认密码" prop="affirmPsd">
        <el-input v-model="psdData.affirmPsd" type="password" show-password />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="primary" class="mr30" @click="submit">
        确 定
      </el-button>
      <el-button @click="dialogVisible = false">
        取 消
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updatePwd } from '@/api/user'
export default {
  name: 'ChangePwd',
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.psdData.newPsd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      psdData: {
        oldPsd: '',
        newPsd: '',
        affirmPsd: ''
      },
      rules: {
        oldPsd: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
        newPsd: [
          { required: true, message: '请输入新密码', trigger: 'change' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        affirmPsd: [
          {
            required: true,
            message: '请确认密码',
            trigger: 'change'
          },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'blur'
          },
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交表单
    submit() {
      this.$refs.amendPsd.validate((valid) => {
        if (valid) {
          updatePwd({
            newPassword: this.psdData.affirmPsd,
            oldPassword: this.psdData.oldPsd
          }).then((res) => {
            if (res.code === 200) {
              this.$message.success('修改密码成功！')
              this.$store.dispatch('user/logout')
              this.$router.replace({ path: '/login' })
            }
          })
        }
      })
    },
    // 关闭清空数据
    closeHandle() {
      for (const i in this.psdData) {
        this.psdData[i] = ''
      }
      this.$refs.amendPsd.clearValidate() // 对子组件表单移除校验结果
    }
  }
}
</script>

<style lang="scss" scoped>
.mr30 {
  margin-right: 30px;
}
</style>
