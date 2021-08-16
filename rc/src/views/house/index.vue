<template>
  <div>
    <ElTableTemp
      ref="temp"
      :search-list="searchList"
      :table-header-list="tableHeaderList"
      :table-handle-list="tableHandleList"
      :get-data-sync="getTableData"
      @deleteHandle="deleteHandle"
      @editHandle="editHandle"
      @watchHandle="watchHandle"
    >
      <div class="Btn-Right">
        <el-button type="primary" @click="showDialogHandel">
          新增
        </el-button>
      </div>
    </ElTableTemp>

    <el-dialog
      v-if="addFromDialogShow"
      :title="dialogTitle"
      :visible.sync="addFromDialogShow"
      width="30%"
      :destroy-on-close="true"
      :close-on-click-modal="false"
    >
      <AddModule
        ref="addModuleRef"
        :form-data="formData"
        :only-read="onlyRead"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFromDialogShow = false">
          取 消
        </el-button>
        <el-button type="primary" @click="submitHandel">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AddModule from './components/AddModule'
import {
  getBuildingCondition,
  addBuilding,
  removeBuilding,
  updateBuilding
} from '@/api/test'
export default {
  name: 'House',
  components: {
    AddModule
  },
  props: {},
  data() {
    return {
      addFromDialogShow: false, // 显示新增弹窗
      dialogTitle: '',
      VoidFormData: {
        communityId: '',
        buildingNo: '',
        phone: '',
        select: '',
        id: '',
        communityName: ''
      },
      onlyRead: false, // 查看只读
      formData: {}, // 新增与修改的表格数据  由页面中定义的VoidFormData赋值
      // 异步接口方法
      getTableData: getBuildingCondition,
      // 搜索列表
      searchList: [
        {
          label: '小区名称',
          labelWidth: 80,
          model: 'communityName', // 绑定字段
          value: '' // 默认值
        },
        {
          label: '楼栋号',
          labelWidth: 80,
          model: 'buildingNo', // 绑定字段
          value: '' // 默认值
        }
      ],
      // 表头设置
      tableHeaderList: [
        {
          prop: 'communityName',
          align: 'left',
          label: '小区名称'
        },
        {
          prop: 'buildingNo',
          label: '楼栋号'
        },
        {
          prop: 'unitCount',
          label: '单元数'
        },
        {
          prop: 'roomCount',
          label: '房屋数'
        },
        {
          prop: 'userCount',
          label: '用户数'
        }
      ],
      // 具体操作
      tableHandleList: [
        {
          label: '编辑',
          disabledRule: false,
          handle: 'editHandle'
        },
        {
          label: '查看',
          disabledRule: false,
          handle: 'watchHandle'
        },
        {
          label: '删除',
          disabledRule: false,
          handle: 'deleteHandle'
        }
      ]
    }
  },
  created() {
    this.formDataReset()
  },
  methods: {
    // 关闭详情弹框
    closeDialog() {
      this.detailIsShow = false
    },
    /**
     * @name: 子组件修改表单数据
     * @param {String} prop 属性名
     * @param {Any} val 任意数值
     * @return {*}
     */
    setFormData(prop, val) {
      this.$set(this.formData, prop, val)
    },
    // 重置表单数据
    formDataReset() {
      this.formData = { ...this.VoidFormData }
    },
    // 保存或修改楼栋
    submitHandel() {
      // 表单校验
      if (!this.$refs.addModuleRef.rulesHandel()) return
      // 存在id 就是编辑 否则就是保存
      if (this.formData.id) {
        this.editBuilding()
      } else {
        this.saveHandel()
      }
    },
    /**
     * @name: 查看
     * @param {Object} row 当前行信息
     * @return {Void}
     */
    watchHandle(row) {
      this.dialogTitle = '查看'
      this.onlyRead = true
      this.formData = { ...row }
      this.addFromDialogShow = true
    },
    // 新增楼栋保存
    saveHandel() {
      addBuilding(this.formData).then(() => {
        this.addFromDialogShow = false
        this.$message({
          message: `添加成功！`,
          type: 'success'
        })
        // 刷新列表
        this.$refs.temp.searchHandel()
      })
    },
    // 显示新增界面
    showDialogHandel() {
      this.formDataReset()
      this.dialogTitle = '新增'
      this.onlyRead = false
      this.addFromDialogShow = true
    },
    // 编辑后保存
    editBuilding() {
      updateBuilding(this.formData).then(() => {
        this.addFromDialogShow = false
        this.$message({
          message: `编辑成功！`,
          type: 'success'
        })
        // 刷新列表
        this.$refs.temp.searchHandel()
      })
    },
    /**
     * @name: 编辑
     * @param {Object} row 当前行数据
     * @returns {Void}
     */
    editHandle(row) {
      this.dialogTitle = '编辑'
      this.onlyRead = false
      this.formData = { ...row }
      this.addFromDialogShow = true
    },
    /**
     * @name: 删除
     * @param {Object} row 当前行数据
     * @returns {Void}
     */
    deleteHandle(row) {
      this.$confirm(`确认是否删除`, '提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeBuilding(row.id).then(() => {
          // 刷新列表
          this.$refs.temp.searchHandel()
          this.$message({
            type: 'success',
            message: `删除成功!`
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// do something...
</style>
