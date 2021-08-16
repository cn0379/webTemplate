<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-25 16:54:26
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 17:03:42
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  methods: {
    refresh() {
      this.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  // width: 100%;
  position: relative;
  height: calc(100vh - 100px);
  padding: 20px;
  background-color: #fff;

  /* 50= navbar  50  */
  border: 10px solid #eee;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
