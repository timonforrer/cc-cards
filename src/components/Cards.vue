<template>
    <div v-if="cardShown">
        <div class="cc-card__wrapper">
          <card v-for="(card, index) in orderBy(cards, 'id', -1)"
                v-if="index == activeCard || index == activeCard + 1"
                :key="index"
                :card="card"></card>
        </div>
        <div class="aligner">
          <div class="center">
            <v-btn flat @click="[like(cards[activeCard].category), updateActive()]">like</v-btn>
            <v-btn flat color="error" @click="[nope(cards[activeCard].category), updateActive()]">dislike</v-btn>
          </div>
        </div>
    </div>
</template>

<script>
import ccCard from './Card2.vue'

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
    },
    nope: function (cat) {
      this.$emit('nope', cat)
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
