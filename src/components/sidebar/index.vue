<template>
  <el-scrollbar class="sidebar" wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item v-for="(route,index) in permission_routers" :key="route.path" :index="index" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebarItem.vue'
import variables from '@/styles/variables.scss'
export default {
  name: 'Sidebar',
  components: { sidebarItem },
  data() {
    return {
      isCollapse1: this.$store.state.app.sidebarToggle
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ]),
    variables() {
      return variables
    },
    isCollapse() {
      return this.$store.state.app.sidebarToggle
    }
  },
  mounted() {
    console.log(this.addRouters)
  }
}
</script>
<style lang="scss">
.sidebar {
    .el-menu-item {
        min-width:178px !important;
    }
    .el-menu a,.el-submenu__title {
        text-align: left;
    }
}
</style>

