<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header><TabsView /></el-header>
        <el-main><AppMain /></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>

    <!-- <el-header><TabsView /> </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-main> <AppMain /> </el-main>
    </el-container> -->
  </div>
</template>
<script>
import AppMain from './components/appMain.vue'
import Sidebar from './components/sidebar.vue'
import TabsView from './components/tabsView.vue'
export default {
  components: { TabsView, Sidebar, AppMain }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  box-flex: 1;
  height: 100%;
}

</style>
