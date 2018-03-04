<template>
  <div class="home">
    <card v-for="(card, index) in cards" :key="index" :card="card" :index="index"></card>
  </div>
</template>

<script>
import {db} from '../firebase'
import ccCard from './Card.vue'

export default {
  components: {
    'card': ccCard
  },
  data () {
    return {
      cards: {}
    }
  },
  firebase: {
    cards: {
      source: db.ref('cards'),
      // Optional, allows you to handle any errors.
      cancelCallback (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

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
