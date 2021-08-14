<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 13:33:10
 * @LastEditors: Wiley.Yang
 * @LastEditTime: 2021-04-14 14:39:46
-->
<template>
  <div class="tableMoudel">
    <el-table
      ref="table"
      :data="tableDataList"
      v-bind="tableAttr"
      :row-key="getRowKeys"
      @selection-change="handleSelectionChange"
      @row-dblclick="rowDblclickHandle"
    >
      <el-table-column
        v-if="tableAttr.isSelection"
        :reserve-selection="tableAttr.isRemember"
        type="selection"
        align="center"
        width="55"
      />
      <!-- 序号 -->
      <el-table-column
        v-if="tableAttr.showIndex"
        label="序号"
        type="index"
        :index="
          index => {
            return index + 1 + (page - 1) * 10;
          }
        "
        width="50"
        align="center"
      />
      <template v-for="(item,i) in tableNameList">
        <el-table-column
          v-if="item.prop !== 'table__operation'"
          :key="i"
          v-bind="item"
          show-overflow-tooltip
          :align="item.align || 'center'"
        >
          <template slot-scope="scope">
            <div v-if="item.propDefine" v-html="item.propDefine(scope.row)" />
            <div v-else>
              {{ scope.row[item.prop] }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="i"
          v-bind="item"
          :align="item.align || 'center'"
        >
          <template slot-scope="scope">
            <template v-for="(btn,index) in tableHandleList">
              <el-button
                v-if="isShowRule(btn.isShow,scope.row)"
                :key="index"
                v-bind="btn.btnAttr"
                :disabled="disabledRule(btn.disabledRule, scope.row)"
                :class="item.isRow ? 'isRow' : ''"
                @click="
                  () => {
                    $parent.$emit(btn.handle, scope.row)
                  }"
              >
                {{ btnLabelRule(btn.label,scope.row) }}
              </el-button>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableMoudel',
  props: {
    // table column的参数配置
    tableHeaderList: {
      type: Array,
      required: true,
      default: () => []
    },
    // table数据
    tableDataList: {
      type: Array,
      required: true,
      default: () => []
    },
    // table的属性
    tableAttr: {
      type: Object,
      default: () => {}
    },
    // 操作配置
    tableHandleList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 当前第几页
    page: {
      type: Number,
      default: () => 1
    }
  },
  data() {
    return {
      multipleSelection: []
    }
  },
  computed: {
    tableNameList() {
      const list = [...this.tableHeaderList]
      // 没有定义 操作head 时 自动添加
      const hasHandle = list.find((item) => item.label === '操作')
      if (this.tableHandleList.length > 0 && !hasHandle) {
        list.push({
          prop: 'table__operation',
          label: '操作'
        })
      }
      return list
    }
  },
  created() {},
  mounted() {},
  methods: {
    /**
   * @name: 设置当前表格选中数据
   * @param {Array} rows 表格数据
   * @return {Void}
   */
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    },
    /**
     * @name: 双击当前行事件
     */
    rowDblclickHandle(row) {
      this.$parent.$emit('rowDblclickHandle', row)
    },
    /**
     * @name: 多选
     */
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$parent.$emit('handleSelectionChange', this.multipleSelection)
    },
    /**
     * @name: 判断是否禁用操作按钮
     * @param { Function | boolean | string } disabledRule 页面自定义的判断函数 或 是否禁用 或 只要当前行某个属性为true就禁用
     * @param {*} row 当前行数据
     * @return {*}
     */
    disabledRule(disabledRule, row) {
      if (disabledRule === undefined) return false
      if (typeof disabledRule === 'boolean') {
        return disabledRule
      } else if (typeof disabledRule === 'string') {
        return row[disabledRule]
      } else if (typeof disabledRule === 'function') {
        return disabledRule(row)
      } else {
        console.error(
          'disabledRule 禁用方法只能传入boolean、string、function类型，请仔细查阅使用手册'
        )
      }
    },
    /**
     * @name: 动态显示btn名称
     * @param { Function | string } label
     * @param {*} row 当前行数据
     * @return {*}
     */
    btnLabelRule(label, row) {
      if (typeof label === 'string') {
        return label
      } else if (typeof label === 'function') {
        return label(row)
      } else {
        console.error(
          'label 只能传入string、function类型，请仔细查阅使用手册'
        )
      }
    },
    /**
     * @name: 动态显示btn
     * @param { Function | boolean } isShow 是否显示
     * @param {*} row 当前行数据
     * @return {*}
     */
    isShowRule(isShow, row) {
      if (isShow === undefined) {
        return true
      }
      if (typeof isShow === 'boolean') {
        return isShow
      } else if (typeof isShow === 'function') {
        return isShow(row)
      } else {
        console.error(
          'isShow 只能传入boolean、function类型，请仔细查阅使用手册'
        )
      }
    },
    /**
     * @name: 记住分页多选框选中的数据
     * @param {*} row 当前行数据
     * @return {*}
     */
    getRowKeys(row) {
      return row.id
    }
  }
}
</script>

<style lang="scss" scoped>
.isRow{
  margin: 1px 16px 6px 1px !important;
}
.tableMoudel {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
