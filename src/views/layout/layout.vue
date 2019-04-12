<template>
  <div class="layout">
    <el-header><TabsView /> </el-header>
    <el-container>
      <el-aside width="200px"><Sidebar /> </el-aside>
      <el-main> <AppMain /> </el-main>
    </el-container>
  </div>
</template>
<script>
import AppMain from "./components/appMain.vue";
import Sidebar from "./components/sidebar.vue";
import TabsView from "./components/tabsView.vue";
export default {
  components: { TabsView, Sidebar, AppMain }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  box-flex: 1;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
