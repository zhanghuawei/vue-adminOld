<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      active-text-color="color: rgb(64, 158, 255)"
      :collapse="isCollapse"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            分组一
          </template>
          <el-menu-item index="1-1">
            选项1
          </el-menu-item>
          <el-menu-item index="1-2">
            选项2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">
            选项3
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">
            选项4
          </template>
          <el-menu-item index="1-4-1">
            选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document" />
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {

  },
  methods: {
    handleSelect() {
      console.log(111)
    }
  }
}
</script>
<style lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    height: 100%;
    background-color: #304156;
    color: rgb(191, 203, 217);
    transition: width .28s;
}
</style>

