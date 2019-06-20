<template>
  <div class="layout">
    <sidebar class="sidebar-container" />
    <div :class="{'main-container':true,'margin-left-58':$store.state.app.sidebarToggle}">
      <div ref="layoutNav" class="layout-nav">
        <navbar />
        <tagsView />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/sidebar/index.vue'
import navbar from '@/components/navbar/navbar.vue'
import tagsView from '@/components/tagsView/tagsView.vue'
import AppMain from './appMain.vue'

export default {
  name: 'Layout',
  components: { Sidebar, navbar, tagsView, AppMain }
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
