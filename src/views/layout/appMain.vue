<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="Layout"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return ['AppMain']// this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
    position: relative;
    overflow: hidden;
    min-height: calc(100vh - 84px);
    padding: 15px;
}
</style>

