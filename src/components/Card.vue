<template>
  <div id="app">
    <div class="cards">
        <div class="card" v-show="card.id >= range.min && card.id <= range.max" :key="card.id">
          <h1 class="card__title">{{ card.title }}</h1>
          <div class="card__image" :style="{ 'background-image': 'url(' + card.image + ')' }"></div>
          <p class="card__description">{{ card.description }}</p>
          <div class="card__button-wrapper">
            <button class="card__button" @click="[updateList(index), nope(card.category)]">
              <i class="material-icons card__icon">thumb_down</i>
            </button>
            <button class="card__button" @click="[updateList(index), like(card.category)]">
              <i class="material-icons card__icon">thumb_up</i>
            </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'card',
    'index',
    'range'
  ],
  data () {
    return {}
  },
  methods: {
    updateList: function (index) {
      this.$emit('updateList', index)
    },
    like: function (cat) {
      this.$emit('nope', cat)
    },
    nope: function (cat) {
      this.$emit('nope', cat)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
