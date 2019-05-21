<template>
  <div class="login">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="loginData"
    >
      <el-form-item label="用户名">
        <el-input v-model="loginData.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginData.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'right',
      loginData: {}
    }
  },
  mounted() {
    sessionStorage.clear()
  },
  methods: {
    submit() {
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
}
</style>
