<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 15:16:05
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 20:09:15
-->
<template>
  <div class="blackScrn" @click.self="hidePop">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PopLayout',
  methods: {
    hidePop() {
      this.$store.commit('popLayout/RESET_STATE')
    }
  }
}
</script>
<style lang="scss" scoped>
.blackScrn {
  position: absolute;
  height: $allHeight;
  width: $allWidth;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
