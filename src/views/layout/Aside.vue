
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item v-for="route in routers" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.less'
export default {
    name: 'Aside',
    data() {
        return {
            isCollapse: '2'
        }
    },
    components: {
        SidebarItem
    },
    computed: {
        routers() {
            return this.$router.options.routes
        },
        variables() {
            return variables
        }
    },
    mounted() {
        console.log(variables)
    }
}
</script>
