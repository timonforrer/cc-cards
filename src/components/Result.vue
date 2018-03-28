<template>
  <div>
    <vue-circle
      :progress="value"
      :size="100"
      :start-angle="4.75"></vue-circle>
  </div>
</template>

<script>

import VueCircle from 'vue2-circle-progress'

export default {
  name: 'Result',
  components: {
    VueCircle
  },
  data () {
    return {
      value: 100
    }
  },
  methods: {}
}

</script>

<style scoped lang="scss">

</style>
