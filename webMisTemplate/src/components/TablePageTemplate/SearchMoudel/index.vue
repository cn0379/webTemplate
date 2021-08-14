<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 14:08:02
 * @LastEditors: Gin
 * @LastEditTime: 2021-04-15 10:09:15
-->
<template>
  <div>
    <el-form
      :model="formData"
    >
      <el-row :gutter="20">
        <!--  -->
        <template v-for="item in mySearchList">
          <el-col :key="item.model" :span="colSpan">
            <el-form-item
              :label="item.label"
              :label-width="item.labelWidth + 'px'"
            >
              <!-- 输入框 -->
              <el-input
                v-if="item.type === 'input' || !item.type"
                :value="searchData[item.model]"
                :placeholder="'请输入' + item.label"
                @keyup.enter.native="onSubmit"
                @input="$emit('setSecahData', item.model, $event)"
              />
              <!-- 选择框 -->
              <el-select
                v-if="item.type === 'select'"
                :value="searchData[item.model]"
                :placeholder="'请选择' + item.label"
                :clearable="item.clearable"
                @input="$emit('setSecahData', item.model, $event)"
              >
                <!-- <el-option label="全部" value="" /> -->
                <el-option
                  v-for="selectItem in item.selectList"
                  :key="selectItem.value"
                  :label="selectItem.label"
                  :value="selectItem.value"
                />
              </el-select>
              <!-- 日期选择 | 级联 -->
              <el-date-picker
                v-if="item.type === 'daterange'"
                :value="searchData[item.model]"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                @input="$emit('setSecahData', item.model, $event)"
              />
              <!-- 日期选择 | 简单 -->
              <el-date-picker
                v-if="item.type === 'date'"
                :value="searchData[item.model]"
                type="date"
                value-format="yyyy-MM-dd"
                @input="$emit('setSecahData', item.model, $event)"
              />
              <!-- 时间日期选择 | 简单 -->
              <el-date-picker
                v-if="item.type === 'datetime'"
                :value="searchData[item.model]"
                type="datetime"
                value-format="yyyy-MM-dd HHmmss"
                @input="$emit('setSecahData', item.model, $event)"
              />
              <!-- 带输入建议 -->
              <el-autocomplete
                v-if="item.type === 'autocomplete'"
                :value="searchData[item.model]"
                class="inline-input"
                :fetch-suggestions="(queryString, cb)=>{ querySearch(queryString, cb, item.allData) }"
                placeholder="请输入内容"
                @keyup.enter.native="onSubmit"
                @select="
                  (val) => {
                    $emit('setSecahData', item.model, val.value)
                  }
                "
                @input="$emit('setSecahData', item.model, $event)"
              />
            </el-form-item>
          </el-col>
        </template>
        <el-col
          v-if="mySearchList.length > 0"
          :offset="searcBtnOffset"
          :span="searchBtnResidue ? 6 : 24"
          :style="{'text-align': (searchBtnResidue ? 'right' : 'center')}"
        >
          <el-button
            type="primary"
            icon="el-icon-search"
            class="my_btn"
            @click="onSubmit"
          >
            查询
          </el-button>
          <el-button
            icon="el-icon-refresh"
            @click="$emit('refashion')"
          >
            重置
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchMoude',
  props: {
    searchAttr: {
      type: Object,
      default: () => {}
    },
    searchList: {
      type: Array,
      default: () => []
    },
    searchData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formData: {
        title: ''
      }
    }
  },
  computed: {
    // 当前行宽
    colSpan() {
      const span = 24 / this.searchAttr.lineNumber
      return span
    },
    // 当前一行剩余的个数
    searchBtnResidue() {
      return this.searchList.length % this.searchAttr.lineNumber
    },
    searcBtnOffset() {
      if (this.searchBtnResidue === 0) {
        return 0
      }
      return 24 - (this.searchBtnResidue * this.colSpan + 6)
    },
    mySearchList() {
      const searchList = this.searchList
      // 设置labelWidth
      searchList.forEach((item) => {
        if (!item.labelWidth && this.searchAttr.labelWidth) {
          item.labelWidth = this.searchAttr.labelWidth
        }
        if (item.model === 'startTime') {
          item.model = 'timeList'
        }
      })
      return searchList
    }
  },

  created() {
    this.searchList.forEach((item) => {
      this.$set(this.formData, item.model, item.value)
    })
  },
  mounted() {},
  methods: {
    // 带建议的 搜索
    querySearch(queryString, cb, allData) {
      var results = queryString ? allData.filter(this.createFilter(queryString)) : allData
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
      }
    },
    onSubmit() {
      this.$emit('searchHandel', this.searchData)
    },
    log(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
// 防止时间选择器宽度过长 超出el-col
::v-deep .el-range-editor--medium.el-input__inner{
  width: 100%;
}

</style>
