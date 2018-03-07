<template>
    <div>
        <div class="cc-card__wrapper">
          <card v-for="(card, index) in cards"
                v-if="index == activeCard || index == activeCard + 1"
                :key="index"
                :card="card"></card>
        </div>
        <button @click="[like(cards[activeCard].category), updateActive()]">like</button>
        <button @click="[nope(cards[activeCard].category), updateActive()]">dislike</button>
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
      activeCard: 0
    }
  },
  methods: {
    updateActive: function () {
      console.log(this.activeCard)
      this.activeCard += 1
    },
    like: function (cat) {
      console.log(cat)
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
  height: 60vh;
  margin-top: 5em;
  position: relative;
}
</style>
