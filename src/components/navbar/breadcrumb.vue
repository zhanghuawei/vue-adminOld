<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/dashboard' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item>{{ route.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  computed: {
    route() {
      return this.$route
    }
  }
}
</script>
<style lang="scss">
.breadcrumb {
line-height: 50px;
}
</style>

