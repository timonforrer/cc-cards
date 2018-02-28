<template>
  <div>
    <h1>{{ card.title }}</h1>
    <p>{{ card.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cards: object
  },
  data () {
  }
}
</script>

<style scoped lang="scss">

</style>
