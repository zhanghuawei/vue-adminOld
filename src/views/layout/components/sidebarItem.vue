<template>
  <div v-if="!item.hidden&&item.alwaysShow">
    <div v-if="!item.children" :index="item.path">
      <router-link :to="item.path">
        <el-menu-item>
          <i :class="item.icon" />
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </div>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.icon" />
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group v-for="(v,vIndex) in item.children" :key="vIndex">
        <router-link :to="v.path">
          <el-menu-item index="v.path">
            {{ v.meta.title }}
          </el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    'item': {
      type: Object,
      default: Object
    },
    'basePath': {
      type: String,
      default: String
    },
    'index': {
      type: Number,
      default: Number
    }
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

