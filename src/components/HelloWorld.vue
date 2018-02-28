<template>
  <div>
    <cards></cards>
  </div>
</template>

<script>
import ccCard from './Cards.vue';

export default {
  components: {
    'cards': ccCard
  },
  data () {
    return {
      msg: 'cascade quiz'
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
