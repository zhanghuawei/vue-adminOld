<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
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
import sidebarItem from './components/sidebarItem.vue'
import variables from '@/styles/variables.scss'
export default {
  name: 'Sidebar',
  components: { sidebarItem },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ]),
    variables() {
      return variables
    }
  },
  mounted() {
    console.log(this.addRouters)
  }
}
</script>
