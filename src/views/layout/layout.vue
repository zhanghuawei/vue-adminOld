<template>
  <div class="layout">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <TabsView />
      <AppMain />
    </div>
  </div>
</template>
<script>
import AppMain from './appMain.vue'
import Sidebar from './sidebar.vue'
import TabsView from './tabsView.vue'
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
