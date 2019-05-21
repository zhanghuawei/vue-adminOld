<template>
  <div class="navbar clearfix">
    <div :class="{'navbar-icon':true,'transform-180':unfold}" @click="sidebarToggle">
      <img class="logo-img img" src="@/icons/left-indent.svg" alt="中国石油工程建设有限公司">
    </div>
    <div class="navbar-breadcrumb">
      <i class="iconfont iconceshi" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    unfold() {
      return this.$store.state.app.sidebarToggle
    }
  },
  methods: {
    sidebarToggle() {
      this.$store.dispatch('sidebarToggle')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
    height: 50px;
    .navbar-icon {
        float: left;
        width: 24px;
        padding: 0 15px;
        line-height: 50px;
        cursor: pointer;
        transition: all .2s linear;
    }
    .transform-180 {
        transform: rotate(-180deg);
    }
}
</style>

