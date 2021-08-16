<!--
 * @name: 文件
 * @Author: Serena
 * @Date: 2021-04-16 18:12:14
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:04:23
-->
<template>
  <div class="navbar">
    <div class="left_title">
      <div>太仓市智慧小区</div>
      <div class="left_title_sub">
        后台管理系统
      </div>
    </div>
    <div class="right-menu">
      <el-dropdown placement="bottom-start"
                   class="avatar-container right-menu-item hover-effect"
      >
        <div class="avatar-wrapper">
          <img src="../../assets/admin-pic.png" class="user-avatar" alt="头像">
          <span class="user-name">{{ $store.state.user.name }}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>
            <span style="display: block;" @click="addAccount">个人信息</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="user-out" @click="logout" />
    </div>
    <changePwd ref="changePwd" />
  </div>
</template>

<script>
import changePwd from '@/components/ChangePwd'
export default {
  components: {
    changePwd
  },
  data() {
    return {
      userForm: {
        communityId: ''
      },
      fromListShow: false,
      roleTypeId: null
    }
  },
  methods: {
    closeDialog() {
      this.$refs.rulesFromList.clearValidate()
      this.fromListShow = false
    },
    // 新增
    addAccount() {
      this.fromListShow = true
    },
    changePsd() {
      this.$refs.changePwd.dialogVisible = true
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}

</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 60px;
  overflow: hidden;
  color: #fff;
  background-color: rgb(39, 58, 93);

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 46px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    // line-height: 50px;
    display: flex;
    align-items: center;
    float: right;
    height: 100%;
    margin-right: 15px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      height: 100%;
      padding: 0 8px;
      color: #5a5e66;
      font-size: 18px;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        position: relative;
        width: 150px;
        margin-top: 16px;
        // line-height: 50px!important;
        .user-avatar {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          vertical-align: middle;
          background-color: #fff;
          border-radius: 12px;
          cursor: pointer;
        }

        .user-name {
          width: 140px;
          height: 20px;
          color: #fff;
          font-size: 14px;
          font-family: SourceHanSansCN-Normal, sans-serif;
          letter-spacing: 0;
        }
      }
    }
  }

  .user-out {
    display: inline-block;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: url(../../assets/ico-out.png) no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}

.left_title {
  display: inline-block;
  width: 300px;
  height: 60px;
  margin-left: 20px;
  padding: 10px 0;
  color: #fff;
  font-size: 24px;
  font-family: RTWS-ShangYa-Demo, sans-serif;
  text-shadow: 0 2px 10px #fff;

  & img {
    margin-right: 10px;
    vertical-align: sub;
  }

  & .left_title_sub {
    font-size: 16px;
    letter-spacing: 9px;
  }
}

.selectarea {
  position: relative;
  // width: 120px;
  width: 100%;
  height: 70px;
  margin-right: 80px;
  line-height: 70px;
}

.community {
  position: relative;
  min-width: 90px;
  height: 70px;
  line-height: 70px;
}

</style>
