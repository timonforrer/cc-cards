<template>
  <div class="cc-card">
    <div class="cc-card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }">
      <div class="cc-card__titlewrapper">
        <h3 class="cc-card__category">{{ displayCategory (card.category) }}</h3>
        <h2 class="cc-card__title">{{ card.title }}</h2>
      </div>
    </div>
    <div class="cc-card__body">
      <p class="cc-card__description">{{ card.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'card'
  ],
  data () {
    return {}
  },
  methods: {
    displayCategory: function (cat) {
      if (cat === 0) {
        return 'Design'
      }
      if (cat === 1) {
        return 'Multimedia'
      }
      if (cat === 2) {
        return 'Informatik'
      }
      if (cat === 3) {
        return 'Administration'
      }
    }
  }
}
</script>

<style lang="scss">
.cc-card {
  left: 50%;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2em 3em rgba(0, 0, 0, 0.07);
  max-width: 100%;
  overflow: hidden;
  position: absolute;
  transition: opacity 500ms ease;
  width: 600px;

  &:nth-child(1) {
    transform: translateX(-50%);
    z-index: 3;
  }

  &:nth-child(2) {
    transform:  translateX(-50%);
    z-index: 2;
  }

  &__image {
    background-position: center center;
    background-size: cover;
    padding-top: 56.25%;
    position: relative;
  }

  &__titlewrapper {
    right: 0;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    color: white;
    padding: 30px 30px 15px 30px;
    position: absolute;
  }

  &__title {
    font-size: 2em;
  }

  &__body {
    padding: 30px;
  }

  &__description {
    margin-bottom: 0;
  }
}
</style>
