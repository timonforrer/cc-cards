<template>
  <v-touch
    v-on:pan="updateXY">
    <div class="cc-card"></div>
  </v-touch>
</template>

<script>
export default {
  data () {
    return {
      x: '',
      y: ''
    }
  },
  methods: {
    updateXY () {
      console.log(event.clientX)
      console.log(event.clientY)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-card {
  width: 90%;
  height: 400px;
  margin: 5%;
  box-sizing: border-box;
  background-color: #313131;
  border-radius: 3px;
}
</style>
