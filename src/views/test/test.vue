<template>
  <div>
    <input type="text" @input="one">
    <input type="text" @change="tow">
  </div>
</template>
<script>
export default {
  methods: {
    one() {
      console.log(1)
    },
    tow() {
      console.log(2)
    }
  }
}
</script>
