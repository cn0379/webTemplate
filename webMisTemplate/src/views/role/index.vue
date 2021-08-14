<template>
  <div>
    <div class="crumbs" />
    <div class="searchMouder">
      <el-form :model="searchParams" label-width="80px">
        <el-form-item label="角色名称">
          <el-col :span="4">
            <el-input v-model="searchParams.roleName" placeholder="请输入" />
          </el-col>
          <el-col :span="4" class="fr">
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSearch"
            >
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
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <div class="container">
      <div class="handle-box" />
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        class="table"
        header-cell-class-name="table-header"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          label="序号"
          type="index"
          :index="
            (index) => {
              return index + 1 + (searchParams.page - 1) * 10
            }
          "
          width="50"
          align="center"
        />
        <el-table-column label="角色名称" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.roleName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="角色描述" align="center">
          <template slot-scope="scope">
            <span>
              {{ scope.row.roleDescribe }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="280" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="handleSee(scope.row)">
              查看
            </el-button>
            <el-button type="text" @click="handleEdit(scope.$index, scope.row)">
              查看权限
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="pageTotal"
          @current-change="handlePageChange"
        />
      </div>
    </div>

    <!-- 查看弹出框 -->
    <el-dialog
      title="查看"
      :visible.sync="seeanle"
      width="30%"
      :destroy-on-close="true"
    >
      <el-form :model="goodsForm" label-width="130px">
        <div class="mb20 seeItem">
          <span>角色名称</span>
          <span>{{ goodsForm.roleName }}</span>
        </div>
        <div class="mb20 seeItem">
          <span>角色描述</span>
          <span>{{ goodsForm.roleDescribe }}</span>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="seeanle = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 查看权限 -->
    <el-dialog
      title="查看权限"
      :visible.sync="editVisible"
      width="50%"
      :destroy-on-close="true"
      @close="CheckedEmpty"
    >
      <el-tree
        ref="tree"
        :data="checkedCities"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        default-expand-all
        :default-checked-keys="defaultCheckedKeysList"
        @check="getResourceIds"
      />
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" class="mr30" @click="submitRole">保存</el-button> -->
        <el-button @click="editVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  RoleSecuredApi,
  EditRoleResources
} from '@/api/index'
import { mockData } from './mock.js'
const defaultParams = {
  limit: 10,
  page: 1,
  roleName: ''
}
export default {
  name: 'Basetable',
  data() {
    return {
      checkAll: false,
      resourceIds: [],
      checkedCities: [],
      roleList: [],
      isIndeterminate: false,
      searchParams: Object.assign({}, defaultParams), // 搜索参数
      goodsForm: {
        roleName: '',
        roleDescribe: '',
        status: '',
        createdUserName: '',
        createdTimeStr: ''
      },
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
      tableData: [],
      multipleSelection: [],
      delList: [],
      editVisible: false,
      seeanle: false,
      addFlag: false,
      pageTotal: 0,
      form: {},
      itemEdit: {},
      idx: -1,
      id: -1,
      defaultProps: {
        label: 'text',
        children: 'children'
      },
      // 编辑默认选中list
      defaultCheckedKeysList: []
    }
  },
  created() {
    this.getData()
    this.getRoleList()
    // 编辑tree内容
    this.editRoleResourcesTree()
  },
  methods: {
    CheckedEmpty() {
      this.defaultCheckedKeysList = []
    },
    // 获取 easy-mock 的模拟数据
    getData() {
      const mockData = {
        code: 200,
        data: {
          total: 7,
          dataList: [
            {
              id: 7,
              roleName: '人才服务中心',
              roleDescribe: '使用人才服务中心功能模块的工作人员',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2021-02-26'
            },
            {
              id: 6,
              roleName: '人社局',
              roleDescribe: '使用人社局功能模块的工作人员',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2021-02-26'
            },
            {
              id: 5,
              roleName: '个人用户',
              roleDescribe: '使用企业端功能模块的个人用户',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2020-12-14'
            },
            {
              id: 4,
              roleName: '企业用户',
              roleDescribe: '使用企业端功能模块的企业用户',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2020-12-14'
            },
            {
              id: 3,
              roleName: '银行工作人员',
              roleDescribe: '使用银行功能模块的工作人员',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2020-12-14'
            },
            {
              id: 2,
              roleName: '人才办工作人员',
              roleDescribe: '使用人才办功能模块的工作人员',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2020-12-14'
            },
            {
              id: 1,
              roleName: '系统管理员',
              roleDescribe: '本系统的管理人员',
              status: 0,
              createdUserName: null,
              createdTimeStr: '2020-12-14'
            }
          ]
        },
        msg: '',
        identifier: ''
      }
      this.tableData = mockData.data.dataList
      this.pageTotal = mockData.data.total
    },
    // 触发搜索按钮
    handleSearch() {
      this.getData()
    },
    // 重置
    refresh() {
      this.searchParams = Object.assign({}, defaultParams)
      this.getData()
    },

    // 添加索引
    tableRowClassName(row) {
      // 给每条数据添加一个索引
      row.row.index = row.rowIndex
    },

    getRoleList() {
      this.roleList = mockData.data
    //   GetRoleResourcesApi().then((res) => {
    //     if (res.code === 200) {
    //       this.roleList = res.data
    //     }
    //     console.log(res, '角色列表')
    //   })
    },
    loopCheckedTree() {},

    // 编辑tree内容
    editRoleResourcesTree() {
      EditRoleResources({}).then((res) => {
        if (res.code === 200) {
          this.checkedCities = [res.data]
          const setDisabled = function(data) {
            if (data.children !== undefined) {
              for (var g = 0; g < data.children.length; g++) {
                setDisabled(data.children[g])
              }
            }
            data.disabled = true
          }
          for (var i = 0; i < this.checkedCities.length; i++) {
            setDisabled(this.checkedCities[i])
          }
        }
      })
    },

    // 编辑操作-获取选中的list
    handleEdit(index, row) {
      this.defaultCheckedKeysList = mockData.map((item) => item.id)
      this.itemEdit = row
      this.editVisible = true
    },
    handleCheckAllChange(val) {
      const roleList = []
      if (val) {
        this.roleList.forEach((v) => {
          roleList.push(v.id)
        })
      }
      this.checkedCities = val ? roleList : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.roleList.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.roleList.length
    },
    // 获取resourceIds数组集合
    getResourceIds() {
      this.resourceIds = this.$refs.tree.getCheckedKeys()
    },
    submitRole() {
      if (!this.resourceIds.length) {
        return
      }
      RoleSecuredApi({
        id: this.itemEdit.id,
        resourceIds: this.resourceIds
      }).then((res) => {
        if (res.code === 200) {
          this.editVisible = false
          this.$message.success('更新成功')
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 查看操作
    handleSee(row) {
      this.goodsForm = { ...row }
      this.seeanle = true
    },
    // 保存编辑
    saveEdit() {
      this.editVisible = false
      this.$message.success(`修改第 ${this.idx + 1} 行成功`)
      this.$set(this.tableData, this.idx, this.form)
    },
    // 分页导航
    handlePageChange(val) {
      this.searchParams.page = val
      this.getData()
    }
  }
}
</script>

<style scoped>
.handle-box {
  margin-bottom: 1.25rem;
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
  margin-right: 0.625rem;
}

.mr30 {
  margin-right: 1.875rem;
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
  margin-bottom: 0.625rem;
}

/deep/ .el-form-item--small.el-form-item {
  margin: 0;
}

/deep/ .el-dialog__header {
  background: #eee;
}

/deep/ .el-dialog__footer {
  background: #eee;
  text-align: center;
}

.fr {
  float: right;
}

.refresh {
  background: #d3e2fb;
  border-color: #d3e2fb;
  color: #000;
}

.btn_hand {
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
