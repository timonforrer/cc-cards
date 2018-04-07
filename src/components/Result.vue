<template>
  <div>
    <h2>{{ message }}</h2>
    <vue-circle
      :progress="value"
      :size="200"
      :start-angle="4.75"
      :fill="{ gradient: ['rgb(175, 221, 234)', 'rgb(116, 183, 199)'] }"></vue-circle>
  </div>
</template>

<script>

import VueCircle from 'vue2-circle-progress'

export default {
  name: 'Result',
  props: [
    'value',
    'message'
  ],
  components: {
    VueCircle
  },
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped lang="scss">
* {
  font-family: 'Lobster';
  text-align: center;
}

h2 {
  font-size: 2.5em;
}
</style>
