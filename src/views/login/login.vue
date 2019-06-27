<template>
  <div class="login">
    <el-form
      :label-position="labelPosition"
      :model="loginData"
    >
      <el-form-item>
        <el-input v-model="loginData.username" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginData.password" type="password" prefix-icon="el-icon-view" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit(['admin'])">
          登陆
        </el-button>
      </el-form-item>
      <div class="btnList">
        <el-button type="primary" @click="submit(['user'])">
          用户
        </el-button>
        <el-button type="primary" @click="submit(['salesman'])">
          业务员
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'right',
      loginData: {
        username: sessionStorage.getItem('Username') || 'admin',
        password: 'admin'
      }
    }
  },
  mounted() {
    sessionStorage.clear()
  },
  methods: {
    submit(val) {
      this.loginData.roles = val
      this.$store.dispatch('login', this.loginData).then(res => {
        this.$router.push({ path: '/dashboard' })
      })
    }
  }
}
</script>

<style lang="scss">
.login {
    width: 300px;
    margin: 0 auto;
    padding-top: 10%;
  .el-button {
    width: 100%;
  }
  .btnList {
      display: flex;
      justify-content:space-between;
  }
}
</style>
