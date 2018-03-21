<template>
  <div>
    <div class="cc-card-wrapper">
      <cc-card
        v-for="(card, index) in cards"
        v-if="index == activeCard || index == activeCard + 1"
        :key="card.id"
        :card="card">
      </cc-card>
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
  }
}
</script>

<style scoped lang="scss">
.cc-card-wrapper {
  min-height: 80vh;
  margin-top: 5em;
  position: relative;
}
</style>
