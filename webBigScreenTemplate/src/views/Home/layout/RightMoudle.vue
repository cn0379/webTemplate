<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 13:56:20
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:44:40
-->
<template>
  <div class="rightMoudle">
    <template v-for="(item, index) in componentList">
      <transition :key="item.component + index" :appear="true" name="fadeInUp">
        <div :style="{ height: item.height + 'px' }">
          <div>{{ item.title }}</div>
          <component :is="item.component" />
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import rightLayoutModule from '../components/RightLayout'
export default {
  name: 'RightMoudle',
  components: {
    ...rightLayoutModule
  },
  data() {
    return {
      componentList: [
        {
          title: '案件汇总',
          height: '500',
          component: 'RightText1'
        },
        {
          title: '时间趋势',
          height: '500',
          component: 'RightText2'
        },
        {
          title: '区域排名',
          height: '500',
          component: 'RightText1'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
