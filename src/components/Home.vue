<template>
  <div class="hello">
    <ul>
      <li v-for="card in cards" v-bind:key="card.id">{{ card.title }} – {{ card.category }}</li>
    </ul>
  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  name: 'Home',
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
