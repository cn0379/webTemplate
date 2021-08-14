<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 13:56:03
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:41:20
-->
<template>
  <transition :appear="true" name="fadeInUp">
    <div class="LeftMoudle">
      <div class="area1">
        <div>案件汇总</div>
        <LeftText1 />
      </div>
      <div class="area2">
        <div>时间趋势</div>
        <LeftText2 />
      </div>
      <div class="area3">
        <div>区域排名</div>
        <LeftText3 />
      </div>
    </div>
  </transition>
</template>

<script>
import leftLayoutModule from '../components/LeftLayout'
export default {
  name: 'LeftMoudle',
  components: {
    ...leftLayoutModule
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.LeftMoudle {
  display: grid;
  grid-template-rows: 500px 500px 500px;
  grid-template-columns: $leftWidth;
  grid-row-gap: $row-gap;
  grid-column-gap: $column-gap;
  grid-template-areas: 'area1' 'area2' 'area3';
}
@for $i from 1 through 3 {
  .area#{$i} {
    grid-area: area#{$i};
  }
}
.fadeInUp-enter-active {
  animation: fadeInUp 0.4s 0.4s both;
}

.fadeInUp-leave-active {
  animation: fadeInUp 0.4s reverse;
}

.fadeOutUp-enter-active {
  animation: fadeInUp 0.4s 0.4s;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(-250%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>
