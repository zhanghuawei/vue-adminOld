<template>
  <div class="layout">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <TabsView />
      <AppMain />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/sidebar/index.vue'
import navbar from '@/components/navbar/navbar.vue'
import AppMain from './appMain.vue'
import TabsView from './tabsView.vue'

export default {
  name: 'Layout',
  components: { Sidebar, navbar, TabsView, AppMain }
}
</script>
<style lang="scss">
.layout {
    display: flex;
    flex-direction: column;
    box-flex: 1;
    height: 100%;

}

</style>
