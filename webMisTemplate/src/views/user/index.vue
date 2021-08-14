<template>
  <div>
    <div class="crumbs" />
    <div class="searchMouder">
      <el-form :inline="true" :model="searchParams" label-width="80px">
        <el-form-item label="姓名" class="mr10">
          <el-input v-model="searchParams.userName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="登录名" class="mr10">
          <el-input v-model="searchParams.loginName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="角色类型">
          <el-select v-model="searchParams.roleId" placeholder="请选择">
            <el-option label="全部" value="" />
            <el-option
              v-for="item in options1"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary" icon="el-icon-search" @click="handleSearch">
            查询
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-refresh"
            class="refresh"
            @click="refresh"
          >
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-button
          type="primary"
          class="handle-del mr30 btn_hand1"
          @click="addFlagClick"
        >
          <span
            style="vertical-align: middle"
          >新增</span>
        </el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        class="table"
        header-cell-class-name="table-header"
      >
        <el-table-column
          label="序号"
          type="index"
          :index="
            index => {
              return index + 1 + (searchParams.page - 1) * 10;
            }
          "
          width="50"
          align="center"
        />
        <el-table-column prop="titleName" label="角色类型" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.sysUserVO.roleName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="loginName" label="登录名" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.loginName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="realName" label="姓名" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.sysUserVO.userName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="联系电话" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.sysUserVO.userPhone }}
            </span>
          </template>
        </el-table-column>

        <el-table-column
          prop="date"
          label="创建时间"
          width="200"
          align="center"
        >
          <template slot-scope="scope">
            <span>
              {{ scope.row.createdTimeStr }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center" width="100px">
          <template slot-scope="scope">
            <div>
              <span v-if="scope.row.status == 0" style="color:#67c23a;">启用</span>

              <span v-if="scope.row.status == 1" style="color:#f56c6c;">禁用</span>
              <el-switch
                v-if="!(scope.row.sysUserVO.roleName === '申报个人人员' || scope.row.sysUserVO.roleName === '申报企业人员')"
                v-model="scope.row.switchFlag"
                class="btn_hand "
                @change="changeSwitch(scope.row)"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="handleSee(scope.row)">
              查看
            </el-button>
            <el-button type="text" @click="handleEdit(scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="pageTotal"
          :page-size="10"
          :current-page.sync="currentPage"
          @current-change="handlePageChange"
        />
      </div>
    </div>

    <!-- 新增弹出框 -->
    <el-dialog
      title="新增"
      :visible.sync="addFlag"
      width="30%"
      :destroy-on-close="true"
    >
      <el-form
        ref="ruleForm"
        :rules="rules"
        :model="ruleForm"
        label-width="130px"
      >
        <el-form-item label="登录名" prop="loginName" class="mb20">
          <el-input v-model="ruleForm.loginName" :maxlength="18" />
        </el-form-item>
        <el-form-item label="姓名" prop="userName" class="mb20">
          <el-input v-model="ruleForm.userName" :maxlength="15" />
        </el-form-item>

        <el-form-item label="联系电话" prop="userPhone" class="mb20">
          <el-input v-model="ruleForm.userPhone" :maxlength="11" />
        </el-form-item>
        <el-form-item label="密码" prop="loginPassword" class="mb20">
          <el-input
            v-model="ruleForm.loginPassword"
            show-password
            :maxlength="18"
            @blur="handleBlur('ruleForm')"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="loginPassword1" class="mb20">
          <el-input
            v-model="ruleForm.loginPassword1"
            show-password
            :maxlength="18"
            @blur="handleBlur('ruleForm')"
          />
        </el-form-item>
        <el-form-item label="角色类型" prop="roleId" class="mb20">
          <el-select v-model="ruleForm.roleId" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="mr30" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button @click="addFlag = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 查看弹出框 -->
    <el-dialog
      title="查看"
      :visible.sync="seeanle"
      width="30%"
      :destroy-on-close="true"
    >
      <el-form :model="goodsForm" label-width="130px">
        <div class="mb20 seeItem">
          <span>用户名</span>
          <span>{{ goodsForm.loginName }}</span>
        </div>
        <div class="mb20 seeItem">
          <span>姓名</span>
          <span>{{ goodsForm.userName }}</span>
        </div>
        <div class="mb20 seeItem">
          <span>联系电话</span>
          <span>{{ goodsForm.userPhone }}</span>
        </div>

        <div class="mb20 seeItem">
          <span>创建时间</span>
          <span>{{ goodsForm.createdTimeStr }}</span>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="seeanle = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 编辑弹出框 -->
    <el-dialog
      title="编辑"
      :visible.sync="editVisible"
      width="30%"
      :destroy-on-close="true"
      @close="editClosed"
    >
      <el-form
        ref="ruleForm"
        :rules="rules"
        :model="ruleForm"
        label-width="130px"
      >
        <el-form-item label="用户名" prop="loginName" class="mb20">
          <el-input v-model="ruleForm.loginName" disabled :maxlength="18" />
        </el-form-item>
        <el-form-item label="姓名" prop="userName" class="mb20">
          <!-- 企业与个人用户，应该不允许修改姓名 -->
          <el-input
            v-model="ruleForm.userName"
            :disabled="ruleForm.roleId == 4 || ruleForm.roleId == 5"
            :maxlength="15"
          />
        </el-form-item>
        <el-form-item label="联系电话" prop="userPhone" class="mb20">
          <el-input v-model="ruleForm.userPhone" :maxlength="11" />
        </el-form-item>

        <el-form-item label="密码" class="mb20" prop="loginPassword">
          <el-input
            v-model="ruleForm.loginPassword"
            show-password
            :maxlength="18"
            placeholder="请输入新密码"
          />
        </el-form-item>
        <el-form-item label="确认密码" class="mb20" prop="loginPassword1">
          <el-input
            v-model="ruleForm.loginPassword1"
            show-password
            :maxlength="18"
            placeholder="请确认密码"
          />
        </el-form-item>
        <el-form-item label="角色类型" prop="roleName">
          <el-input v-model="ruleForm.roleName" disabled>
            {{ roleName }}
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="mr30" @click="saveEdit('ruleForm')">确 定</el-button>
        <el-button @click="editVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { PersonsQueryApi, SaveApi, UpdateApi } from '@/api/index'

const defaultParams = {
  limit: 10,
  loginName: '',
  page: 1,
  roleId: '',
  userName: '',
  userPhone: '',
  createdTimeStr: '',
  createdUserName: '',
  status: '',
  userIdCard: ''
}
export default {
  name: 'Basetable',
  data() {
    const validatePassword1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
        // password 是表单上绑定的字段
      } else if (value !== this.ruleForm.loginPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
        // password 是表单上绑定的字段
      } else if (value !== this.ruleForm.loginPassword1 && this.ruleForm.loginPassword1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      searchParams: Object.assign({}, defaultParams), // 搜索参数
      // 表单数据
      roleName: '',
      defaultRuleForm: {
        id: null,
        loginName: '',
        loginPassword: '',
        loginPassword1: '',
        roleId: null,
        userIdCard: '',
        userName: '',
        userPhone: '',
        roleName: ''
      },
      ruleForm: {
        id: null,
        loginName: '',
        loginPassword: '',
        loginPassword1: '',
        roleId: null,
        userIdCard: '',
        userName: '',
        userPhone: '',
        roleName: ''
      },
      goodsForm: {
        roleId: null,
        loginPassword: '',
        loginPassword1: '',
        userPhone: '',
        status: '',
        loginName: '',
        userName: '',
        createdUserName: ''
      },
      currentPage: 1,

      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ],
      options1: [],
      options2: [
        {
          id: 1,
          roleName: '系统管理员'
        },
        {
          id: 2,
          roleName: '人才办工作人员'
        }
      ],
      tableData: [],
      multipleSelection: [],
      delList: [],
      editVisible: false,
      seeanle: false,
      addFlag: false,
      pageTotal: 0,
      form: {},
      idx: -1,
      id: -1,

      switchFlag: true,
      rules: {
        loginName: [{ required: true, message: '请输入登录名', trigger: 'blur' }],
        id: [{ required: true, message: '请输入id', trigger: 'blur' }],

        loginPassword: [
          { required: true, validator: validatePassword, trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        loginPassword1: [
          { required: true, validator: validatePassword1, trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        roleId: [{ required: true, message: '请选择角色类型', trigger: 'change' }],
        userIdCard: [{ required: true, message: '请输入身份证号', trigger: 'change' }]
      },
      switchCloseFlag: false,
      psw: '',
      pswAgain: ''
    }
  },
  created() {
    this.getData()
    const mockData = {
      code: 200,
      data: [
        { id: 1, roleName: '系统管理员' },
        { id: 2, roleName: '人才办工作人员' },
        { id: 3, roleName: '银行工作人员' },
        { id: 4, roleName: '企业用户' },
        { id: 5, roleName: '个人用户' },
        { id: 6, roleName: '人社局' },
        { id: 7, roleName: '人才服务中心' }
      ],
      msg: '',
      identifier: ''
    }
    this.options1 = mockData.data
    // RoleUpdateApi().then(res => {
    //   this.options1 = res.data
    //   console.log(res, '获取角色类型列表')
    // })
  },
  methods: {
    // 失去焦点判断两次密码
    handleBlur(form) {
      this.$refs[form].validateField('loginPassword')
      this.$refs[form].validateField('loginPassword1')
    },
    getData() {
      const mockData = { 'code': 200, 'data': { 'total': 101, 'dataList': [{ 'loginName': '320522196311163550', 'status': 0, 'sysUserVO': { 'userName': '王建新', 'userPhone': null, 'userIdCard': null, 'roleId': 5, 'roleName': '申报个人人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-26 14:41:03' }, { 'loginName': '00101004', 'status': 0, 'sysUserVO': { 'userName': '太仓海昌机械有限公司', 'userPhone': null, 'userIdCard': null, 'roleId': 4, 'roleName': '申报企业人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-26 13:47:52' }, { 'loginName': 'rsj', 'status': 0, 'sysUserVO': { 'userName': '人社局账号', 'userPhone': null, 'userIdCard': null, 'roleId': 6, 'roleName': '人社局' }, 'createdUserName': null, 'createdTimeStr': '2021-02-26 11:14:38' }, { 'loginName': 'rcfwzx', 'status': 0, 'sysUserVO': { 'userName': '人才服务中心账号', 'userPhone': null, 'userIdCard': null, 'roleId': 7, 'roleName': '人才服务中心' }, 'createdUserName': null, 'createdTimeStr': '2021-02-26 11:05:47' }, { 'loginName': '320522198706046112', 'status': 0, 'sysUserVO': { 'userName': '戴凌震', 'userPhone': null, 'userIdCard': null, 'roleId': 5, 'roleName': '申报个人人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-26 10:21:37' }, { 'loginName': '76575676575', 'status': 0, 'sysUserVO': { 'userName': '5676578', 'userPhone': '76575676575', 'userIdCard': null, 'roleId': 3, 'roleName': '银行工作人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-23 13:54:52' }, { 'loginName': '77777777777', 'status': 0, 'sysUserVO': { 'userName': '777', 'userPhone': '77777777777', 'userIdCard': null, 'roleId': 3, 'roleName': '银行工作人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-23 13:54:40' }, { 'loginName': '66666666666', 'status': 1, 'sysUserVO': { 'userName': '555', 'userPhone': '66666666666', 'userIdCard': null, 'roleId': 3, 'roleName': '银行工作人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-23 13:54:34' }, { 'loginName': '12222222222', 'status': 0, 'sysUserVO': { 'userName': '555', 'userPhone': '12222222222', 'userIdCard': null, 'roleId': 3, 'roleName': '银行工作人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-23 13:54:26' }, { 'loginName': '11111111119', 'status': 0, 'sysUserVO': { 'userName': '111', 'userPhone': '11111111119', 'userIdCard': null, 'roleId': 3, 'roleName': '银行工作人员' }, 'createdUserName': null, 'createdTimeStr': '2021-02-23 13:54:18' }] }, 'msg': '', 'identifier': '' }
      const arr = mockData.data.dataList || []
      if (arr.length) {
        arr.forEach(v => {
          v.switchFlag = v.status === 0
        })
      }
      this.tableData = arr
      this.pageTotal = mockData.data.total
      //   AccountQueryApi(this.searchParams).then(res => {
      //     const arr = res.data.dataList || []

    //     if (arr.length) {
    //       arr.forEach(v => {
    //         v.switchFlag = v.status === 0
    //       })
    //     }
    //     this.tableData = res.data.dataList
    //     this.pageTotal = res.data.total
    //   })
    },
    // 触发搜索按钮
    async handleSearch() {
      this.searchParams.page = 1
      await this.getData()
      this.currentPage = 1
    },
    // 重置
    refresh() {
      this.searchParams = Object.assign({}, defaultParams)
      this.getData()
    },
    // 新增
    addFlagClick() {
      this.addFlag = true
      this.ruleForm = JSON.parse(JSON.stringify(this.defaultRuleForm))
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.ruleForm.clearValidate()
        }, 10)
      })
    },
    // 新增操作

    submitForm(formName) {
      const addparams = {
        loginName: this.ruleForm.loginName,
        loginPassword: this.ruleForm.loginPassword,
        loginPassword1: this.ruleForm.loginPassword1,
        sysUserAddVO: {
          roleId: this.ruleForm.roleId,
          userIdCard: this.ruleForm.userIdCard,
          userName: this.ruleForm.userName,
          userPhone: this.ruleForm.userPhone
        }
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          SaveApi(addparams).then(res => {
            console.log(res)
            if (res.code === 200) {
              this.$message.success('操作成功')
              this.addFlag = false
              this.getData()
              this.$refs[formName].clearValidate()
              this.$refs[formName].resetFields()
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    },

    // 改变状态
    changeSwitch(item) {
      item.status = item.switchFlag ? '0' : '1'
      PersonsQueryApi({
        roleId: item.sysUserVO.roleId,
        loginName: item.loginName,
        status: item.switchFlag ? '0' : '1'
      }).then(() => {
        this.$message.success('操作成功')
      })
    },
    handleSee(row) {
      this.goodsForm.loginName = row.loginName
      this.goodsForm.roleId = row.sysUserVO.roleId
      this.goodsForm.userName = row.sysUserVO.userName
      this.goodsForm.userPhone = row.sysUserVO.userPhone
      this.goodsForm.createdUserName = row.createdUserName
      this.goodsForm.createdTimeStr = row.createdTimeStr

      this.seeanle = true
    },
    // 编辑
    handleEdit(row) {
      this.editVisible = true
      this.ruleForm.id = row.id
      this.ruleForm.loginName = row.loginName
      this.ruleForm.loginPassword = row.loginPassword
      this.ruleForm.loginPassword1 = row.loginPassword1
      this.ruleForm.roleId = row.sysUserVO.roleId
      this.ruleForm.roleName = row.sysUserVO.roleName

      this.ruleForm.userIdCard = row.sysUserVO.userIdCard
      this.ruleForm.userName = row.sysUserVO.userName
      this.ruleForm.userPhone = row.sysUserVO.userPhone
    },
    // 编辑操作
    saveEdit(formName) {
      const editparams = {
        id: this.ruleForm.id,
        loginName: this.ruleForm.loginName,
        loginPassword: this.ruleForm.loginPassword,
        loginPassword1: this.ruleForm.loginPassword1,

        sysUserAddVO: {
          roleId: this.ruleForm.roleId,
          userIdCard: this.ruleForm.userIdCard,
          userName: this.ruleForm.userName,
          userPhone: this.ruleForm.userPhone,
          roleName: this.ruleForm.roleName
        }
      }
      // 保存编辑
      this.$refs[formName].validate(valid => {
        if (valid) {
          UpdateApi(editparams).then(res => {
            if (res.code === 200) {
              this.$message.success('操作成功')
              this.editVisible = false
              this.getData()
              this.$refs[formName].resetFields()
              this.$refs[formName].clearValidate()
            } else {
              this.$message.error(res.msg)
              this.$refs[formName].resetFields()
              this.$refs[formName].clearValidate()
            }
          })
        } else {
          return false
        }
      })
    },
    // 分页导航
    handlePageChange(val) {
      this.searchParams.page = val
      this.getData()
    },
    // 弹框关闭
    editClosed() {
      // 去除上次的校验结果
      this.$nextTick(() => {
        this.$refs.ruleForm.resetFields()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-box {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
}

.handle-select {
    width: 7.5rem;
}

.handle-input {
    width: 18.75rem;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 0.875rem;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 0.625rem !important;
}
.mr30 {
    margin-right: 2.5rem !important;
}

.mb20 {
    margin-bottom: 1.25rem !important;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 2.5rem;
    height: 2.5rem;
}

.searchMouder {
    background: #fff;
    padding: 1.875rem;
    padding-left: 0;
    margin-bottom: 0.625rem;
}

::v-deep .el-form-item--small.el-form-item {
    margin: 0;
}
::v-deep .el-dialog__header {
    background: #eee;
}
::v-deep .el-dialog__footer {
    background: #eee;
    text-align: center;
}
::v-deep .el-select {
    display: block;
}
::v-deep .el-switch__core {
    width: 1.875rem !important;
    margin-left: 1rem;
    height: 1rem;
}
::v-deep .el-switch__core:after {
    width: 0.75rem;
    height: 0.75rem;
}
::v-deep .el-switch.is-checked .el-switch__core::after {
    margin-left: -0.8125rem;
}
::v-deep .el-switch__label--right {
    color: #7d7e81;
}
::v-deep .el-switch {
    height: 1.0625rem;
    border-radius: 0.1875rem;
}

::v-deep .el-tag.el-tag--success {
    background-color: rgba($color: #000000, $alpha: 0);
    border-color: none;
    color: #000;
}

::v-deep .el-tag {
    border: none;
}
.fr {
    float: right;
}
.refresh {
    background: #d3e2fb;
    border-color: #d3e2fb;
    color: #000;
}
.btn_hand1 {
    background: #e8eefc;
    color: #7d7e81;
    padding: 0.375rem 0.75rem;
    border: none;
}

.seeItem {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #eee;
    padding-bottom: 0.625rem;
}

.pagination {
    margin: 1.25rem 0;
    text-align: right;
}
</style>
