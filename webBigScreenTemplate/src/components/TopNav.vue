<!--
 * @name:顶部标题
 * @Author: Gin
 * @Date: 2020-12-10 13:28:33
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 18:48:38
-->
<template>
  <div class="topNav">
    <div @click="setPop(1)">
      弹出两个
    </div>
    <div @click="setPop(2)">
      弹出一个
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopNav',
  methods: {
    setPop(a) {
      if (a === 1) {
        this.$store.commit('popLayout/SET_POP_NAME', [
          { name: 'Text1', x: 300, y: 200 },
          { name: 'Text2', x: 600, y: 800 }
        ])
        this.$store.commit('popLayout/TOGGLE_POP')
      } else {
        this.$store.commit('popLayout/SET_POP_NAME', { name: 'Text2', x: 300, y: 800 })
        this.$store.commit('popLayout/TOGGLE_POP')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.topNav {
& > div{
  color: red;
}
  &::after {
    content: '';
    height: 128px;
    width: 3744px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-image: url('../assets/common/top-nav.png');
  }
}
</style>
