<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:44:21
-->
<template>
  <div class="home">
    <!-- 地图层 -->
    <Map />
    <!-- 内容层 -->
    <ContentLayout>
      <TopNav slot="topPack" />
      <LeftMoudle slot="leftPack" />
      <div slot="centerPack" />
      <RightMoudle slot="rightPack" />
    </ContentLayout>
    <!-- 弹出层 -->
    <PopLayout v-if="popState">
      <VueDragResize
        v-for="(popProperty) in popList"
        :key="'component' + popProperty.name"
        :is-resizable="false"
        :x="popProperty.x || 0"
        :y="popProperty.y || 0"
        content-class="VueDragResize-border"
        :style="{zIndex: popProperty.name === currentClickPopName ? 999 : 99}"
        @clicked="onActivated(popProperty.name)"
      >
        <component :is="popProperty.name" />
      </VueDragResize>
    </PopLayout>
    <!-- 图片预览层 -->
  </div>
</template>

<script>
import layout from './layout'
import popLayoutModule from './components/PopLayout'
import ContentLayout from '@/layout/ContentLayout.vue'
import PopLayout from '@/layout/PopLayout.vue'
import TopNav from '@/components/TopNav'
import Map from '@/components/Map/AMap'
import VueDragResize from 'vue-drag-resize'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ContentLayout,
    TopNav,
    PopLayout,
    VueDragResize,
    Map,
    ...layout, // 载入所有layout文件夹中的组件 请勿重复载入
    ...popLayoutModule // // 载入所有component文件夹中的组件 请勿重复载入
  },
  data() {
    return {
      popList: [],
      currentClickPopName: ''
    }
  },
  computed: {
    ...mapState({
      popState: (state) => state.popLayout.popState,
      popName: (state) => state.popLayout.popName,
      popNameList: (state) => state.popLayout.popNameList
    })
  },
  watch: {
    popNameList(newVal) {
      this.popList = newVal
    }
  },
  methods: {
    onActivated(el) {
      this.currentClickPopName = el
    }
  }
}
</script>

<style lang="scss" scoped></style>
