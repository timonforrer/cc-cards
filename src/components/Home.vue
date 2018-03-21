<template>
  <div class="home">
    <h1 class="title">cascade Cards</h1>
    <cards :cards="cards"
          @like="cardLike"
          @nope="cardNope"
          class="cc-cards"></cards>

    <div class="stats">
      <p><b>Administration:</b> {{ categories.administration }}</p>
      <p><b>Design:</b> {{ categories.design }}</p>
      <p><b>Informatik:</b> {{ categories.informatik }}</p>
      <p><b>Multimedia:</b> {{ categories.multimedia }}</p>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import ccCards from './Cards.vue'

export default {
  name: 'Home',
  components: {
    'cards': ccCards
  },
  data () {
    return {
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
  }
}
</script>

<style scoped lang="scss">
.title {
  margin: 3em auto 0 auto;
  max-width: 90%;
  position: relative;
  width: 600px;
}

.cc-cards {
  position: relative;
  display: block;
  max-width: 90%;
  margin: 0 auto;
}

.stats {
  width: 600px;
  max-width: 90%;
  margin: 5em auto;
  font-size: 1.1em;
}

.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @media screen and (max-width: 380px) {
    background-color: #f7f7fa;
  }
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
