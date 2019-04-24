<template>
  <div class="login">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {}
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login");
    }
  }
};
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
