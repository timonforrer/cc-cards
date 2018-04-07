<template>
  <div>

    <div class="cc-card-wrapper">

      <cc-card
        v-for="(card, index) in cards"
        v-if="index == activeCard || index == activeCard + 1"
        :key="card.id"
        :card="card"
        :activeCard="activeCard"
        :index="index"
        @swipedRight="[like(card.category), updateActive()]"
        @swipedLeft="[nope(card.category), updateActive()]">
      </cc-card>

      <cc-result
       v-if="resultShown"
       :value="value"
       :message="message"
       class="result"></cc-result>

    </div>

    <div class="aligner">
      <div class="center" v-if="this.activeCard != this.cards.length">
        <button @click="[like(cards[activeCard].category), updateActive()]">Like</button>
        <button @click="[nope(cards[activeCard].category), updateActive()]">Nope</button>
      </div>
    </div>

  </div>
</template>

<script>
import Card from './Card.vue'
import Result from './Result'

export default {
  name: 'Cards',
  props: [
    'cards'
  ],
  components: {
    'cc-card': Card,
    'cc-result': Result
  },
  data () {
    return {
      activeCard: 0,
      resultShown: false,
      likes: 0,
      value: 0,
      message: 'yes'
    }
  },
  methods: {
    like (cat) {
      this.$emit('like', cat)
      this.likes = this.likes + 1
    },
    nope (cat) {
      this.$emit('nope', cat)
    },
    updateActive () {
      var maxLikes = this.cards.length
      this.activeCard += 1
      this.value = ((this.likes / maxLikes) * 100)

      if (this.activeCard === this.cards.length) {
        this.resultShown = true
      }

      if (this.value > 50) {
        this.message = `It's a match!`
      } else {
        this.message = 'Mediamatiker auf den 2. Blick?'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cc-card-wrapper {
  min-height: 100vh;
  margin-top: 5em;
  position: relative;

  @media screen and (max-width: 380px) {
    min-height: 90vh;
  }
}

.aligner {
  display: flex;
  justify-content: center;
}

.center {
  display: inline-block;
}

.result {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 200px;
  z-index: 3;
  top: 8em;

  @media screen and (max-width: 380px) {
    top: 0;
  }
}
</style>
