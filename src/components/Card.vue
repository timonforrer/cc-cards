<template>
  <div>
    <h1>{{ card.title }}</h1>
    <p>{{ card.text }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'card'
  ],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
