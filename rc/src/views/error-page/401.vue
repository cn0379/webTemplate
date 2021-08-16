<template>
  <div class="errPage-container">
    <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">
          Oops!
        </h1>
        <h2>你没有权限去该页面</h2>
        <router-link to="/">
          回首页
        </router-link>
      </el-col>
      <el-col :span="12">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap:
        'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .pan-back-btn {
    color: #fff;
    background: #008489;
    border: none !important;
  }

  .pan-gif {
    display: block;
    margin: 0 auto;
  }

  .pan-img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .text-jumbo {
    color: #484848;
    font-weight: 700;
    font-size: 60px;
  }

  .list-unstyled {
    font-size: 14px;

    li {
      padding-bottom: 5px;
    }

    a {
      color: #008489;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
