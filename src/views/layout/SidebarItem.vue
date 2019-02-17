<template>
  <div v-if="item.asideShow&&item.children" class="menu-wrapper">
    <template v-if="item.children && item.children.length === 1">
      <router-link :to="item.children.path">
        <el-menu-item :index="item.children.path" :class="{'submenu-title-noDropdown':!isNest}">
          <div v-if="item.children.meta" :icon="item.children.meta.icon||item.meta.icon" :title="item.children.meta.title" />
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path">
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-if="item.children&&item.children.length>0"
        :is-nest="true"
        :item="child"
        class="nest-menu" />

      <router-link v-for="(val,index) in item.children" :to="val.path" :key="index.toString()">
        <el-menu-item :index="val.path">
          <div v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
        </el-menu-item>
      </router-link>
    </el-submenu>

  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  }
}
</script>
