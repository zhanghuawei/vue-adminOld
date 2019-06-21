<template>
  <el-scrollbar class="sidebar" :class="{'sidebar-is':isCollapse}" wrap-class="scrollbar-wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
      @select="handleSelect"
    >
      <!-- <sidebar-item v-for="(route,index) in permission_routers" :key="route.path" :index="index" :item="route" :base-path="route.path" /> -->
      <template v-for="item in permission_routers">
        <template v-if="!item.hiddle">
          <el-menu-item v-if="!item.alwaysShow" :key="item.path" :index="item.path">
            <i :class="item.meta.icon" />
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>

          <el-submenu v-else :key="item.path" :index="item.path">
            <template slot="title">
              <i :class="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="(v,vIndex) in item.children">
              <el-menu-item v-if="!v.hidden" :key="vIndex" :index="item.path+'/'+v.path">
                {{ v.meta.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
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
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({ 'path': key })
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.sidebar {
    .el-menu,.el-submenu__title {
        text-align: left;
    }
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }
    .el-menu {
        width: 180px;
        height: 100%;
        overflow: hidden;
        transition: all .1s linear;
    }
}
.sidebar-is {
    .el-menu {
        width: 58px;
    }
}
</style>

