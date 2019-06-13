<template>
  <div class="navbar clearfix">
    <div :class="{'navbar-icon':true,'transform-180':unfold}" @click="sidebarToggle">
      <img class="logo-img img" src="@/icons/left-indent.svg" alt="中国石油工程建设有限公司">
    </div>
    <breadcrumb class="navbar-breadcrumb" />
    <div class="navbar-other">
      <span @click="quit">退出</span>
    </div>
  </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'

export default {
  components: { breadcrumb },
  computed: {
    unfold() {
      return this.$store.state.app.sidebarToggle
    }
  },
  methods: {
    sidebarToggle() {
      this.$store.dispatch('sidebarToggle')
    },
    quit() {
      console.log(111)
      this.$store.dispatch('quit').then(res => {
        console.log('quit')
      })
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
    .navbar-breadcrumb {
        float: left;
        line-height: 50px;
        padding-left: 15px;
    }
    .navbar-other {
        float:right;
        line-height: 50px;
        span {
            padding: 0 15px;
            cursor: pointer;
        }

    }
}
</style>

