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
import { userLogin } from '@/api/api.js'

export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'right',
      loginData: {}
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('login', this.loginData).then(res => {
        debugger
        this.$router.push('/index')
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 300px;
  margin: 10% auto;
  .el-button {
    width: 100%;
  }
}
</style>
