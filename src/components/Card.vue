<template>
  <div id="app">
    <div class="cards">
        <div class="card" v-show="card.id >= displayRange.min && card.id <= displayRange.max" :key="card.id">
          <h1 class="card__title">{{ card.title }}</h1>
          <div class="card__image" :style="{ 'background-image': 'url(' + card.url + ')' }"></div>
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
    
    <div class="results">
      <h2 class="results__title">Design: {{ design }}</h2>
      <h2 class="results__title">Multimedia: {{ multimedia }}</h2>
      <h2 class="results__title">Informatik: {{ informatik }}</h2>
      <h2 class="results__title">Administration: {{ administration }}</h2>
    </div>
  
  </div>
</template>

<script>
export default {
  props: [
    'card',
    'index'
  ],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
