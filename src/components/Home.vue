<template>
  <div class="home">
    <div class="cc-cards">
      <card v-for="(card, index) in cards"
          :card="card"
          :index="index"
          :key="index"
          :range="displayRange"
          @updateList="cardUpdateList"
          @like="cardLike"
          @nope="cardNope"></card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {db} from '../firebase'
import ccCard from './Card.vue'

export default {
  components: {
    'card': ccCard
  },
  data () {
    return {
      cards: {},
      displayRange: {
        min: 1,
        max: 3
      }
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
  },
  methods: {
    cardUpdateList: function (index) {
      this.displayRange.min += 1
      this.displayRange.max += 1
      Vue.delete(this.cards, index)
    },
    cardLike: function (cat) {
      console.log('category: ' + cat)
    },
    cardNope: function (cat) {
      console.log('category: ' + cat)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-cards {
  position: relative;
  display: block;
  height: 100vh;
  max-width: 90%;
  margin: 0 auto;
}

.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
