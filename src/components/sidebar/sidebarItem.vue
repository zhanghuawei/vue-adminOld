<template>
  <div v-if="!item.hidden&&childrenLen>0" class="menu-wrapper">
    <router-link v-if="childrenLen===1" :to="item.redirect">
      <el-menu-item :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </router-link>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <router-link v-for="(v,vIndex) in children" :key="vIndex" :to="item.path+'/'+v.path">
        <el-menu-item :index="v.path">
          {{ v.meta.title }}
        </el-menu-item>
      </router-link>
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
  computed: {
    children() {
      return this.item.children
    },
    childrenLen() {
      return this.item.children.length
    }
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

