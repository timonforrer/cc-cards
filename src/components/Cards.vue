<template>
    <div v-if="cardShown">

      <div class="cc-card__wrapper">
        <card v-for="(card, index) in sortedCards"
              v-if="index == activeCard || index == activeCard + 1"
              :key="index"
              :card="card"></card>
      </div>
      <div class="aligner">
        <div class="center">
          <v-btn flat @click="[like(sortedCards[activeCard].category), updateActive()]">like</v-btn>
          <v-btn flat color="error" @click="[nope(sortedCards[activeCard].category), updateActive()]">dislike</v-btn>
        </div>
      </div>
    </div>
</template>

<script>
import ccCard from './Card2.vue'

var _ = require('lodash')

export default {
  props: [
    'cards',
    'cat'
  ],
  components: {
    'card': ccCard
  },
  data () {
    return {
      activeCard: 0,
      cardShown: true
    }
  },
  computed: {
    sortedCards () {
      return _.orderBy(this.cards, 'id', 'desc')
    }
  },
  methods: {
    updateActive: function () {
      console.log(this.activeCard)
      this.activeCard += 1
      if (this.activeCard >= this.cards.length) {
        this.cardShown = false
      }
    },
    like: function (cat) {
      this.$emit('like', cat)
      console.log(cat)
    },
    nope: function (cat) {
      this.$emit('nope', cat)
      console.log(cat)
    },
    onSwipeLeft: function () {
      alert('Yes')
    }
  }
}
</script>

<style scoped lang="scss">
.cc-card__wrapper {
  min-height: 80vh;
  margin-top: 5em;
  position: relative;
}

.aligner {
  display: flex;
  justify-content: center;
}

.center {
  display: inline-block;
}
</style>
