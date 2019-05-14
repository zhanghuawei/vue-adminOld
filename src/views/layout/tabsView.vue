<template>
  <div>
    tabs-view
    <div @click="quit">
      退出
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabsView',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    quit() {
      console.log(111)
      this.$store.dispatch('quit').then(res => {
        console.log('quit')
      })
    }
  }
}
</script>
