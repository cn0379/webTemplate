<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 11:02:00
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-16 16:09:23
-->
<template>
  <div class="overall">
    <div class="top">
      <slot name="topPack" />
    </div>
    <div class="contentPack">
      <div class="left">
        <slot name="leftPack" />
      </div>
      <div class="center">
        <slot name="centerPack" />
      </div>
      <div class="right">
        <slot name="rightPack" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentLayout'
}
</script>

<style lang="scss" scoped>
.overall {
  height: $allHeight;
  width: $allWidth;
}
.overall,
.contentPack,
.top,
.left,
.center,
.right {
  // 整体穿透
  pointer-events: none;
  user-select: none;
}
.top *,
.left *,
.center *,
.right *{
  pointer-events: auto;
}

.contentPack {
  display: flex;
  justify-content: space-between;
}

.left,
.center,
.right {
  height: $contentHeight;
}

.top {
  height: $topHeight;
}

.left {
  width: $leftWidth;
  background-color: #923;
}

.center {
  width: $centerWidth;
  background-color: rgba(29, 136, 243, 0);
}

.right {
  width: $rightWidth;
  background-color: rgb(59, 151, 22);
}
</style>
<style>
.amap-logo {
    display: none;
    opacity: 0 !important;
  }

  .amap-copyright {
    opacity: 0;
  }
</style>
