<template>
  <div class="home">
    <cc-cards
    class="cc-cards"
    :cards="sortedCards"
    @like="cardLike"
    @nope="cardNope"></cc-cards>
  </div>
</template>

<script>
import {db} from '../firebase'
import Cards from './Cards.vue'

var _ = require('lodash')

export default {
  name: 'Home',
  components: {
    'cc-cards': Cards
  },
  data () {
    return {
      cards: {},
      categories: {
        administration: 0,
        design: 0,
        informatik: 0,
        multimedia: 0
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
    cardLike: function (cat) {
      if (cat === 'Design') {
        this.categories.design += 1
      }
      if (cat === 'Multimedia') {
        this.categories.multimedia += 1
      }
      if (cat === 'Informatik') {
        this.categories.informatik += 1
      }
      if (cat === 'Administration') {
        this.categories.administration += 1
      }
    },
    cardNope: function (cat) {
      if (cat === 'Design') {
        this.categories.design -= 1
      }
      if (cat === 'Multimedia') {
        this.categories.multimedia -= 1
      }
      if (cat === 'Informatik') {
        this.categories.informatik -= 1
      }
      if (cat === 'Administration') {
        this.categories.administration -= 1
      }
    }
  },
  computed: {
    sortedCards () {
      return _.orderBy(this.cards, 'id', 'desc')
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.cc-cards {
  position: relative;
  display: block;
  max-width: 90%;
  margin: 0 auto;
}

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
