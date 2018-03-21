<template>
  <div>

    <div class="cc-card-wrapper">

      <cc-card
        v-for="(card, index) in cards"
        v-if="index == activeCard || index == activeCard + 1"
        :key="card.id"
        :card="card"
        @swipedRight="[like(card.category), updateActive()]"
        @swipedLeft="[nope(card.category), updateActive()]">
      </cc-card>

    </div>

    <div class="aligner">
      <div class="center">
      <button @click="[like(cards[activeCard].category), updateActive()]">Like</button>
      <button @click="[nope(cards[activeCard].category), updateActive()]">Nope</button>
      </div>
    </div>

  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Cards',
  props: [
    'cards'
  ],
  components: {
    'cc-card': Card
  },
  data () {
    return {
      activeCard: 0
    }
  },
  methods: {
    like (cat) {
      this.$emit('like', cat)
    },
    nope (cat) {
      this.$emit('nope', cat)
    },
    updateActive () {
      this.activeCard += 1
    }
  }
}
</script>

<style scoped lang="scss">
.cc-card-wrapper {
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
