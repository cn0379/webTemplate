<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-27 10:24:28
-->
<template>
  <div id="app">
    <div />
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
#app {
  @include relative;

  color: $fontColor;
}

</style>
