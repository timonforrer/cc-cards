<template>
  <div class="cc-card" v-show="card.id >= range.min && card.id <= range.max" :key="card.id">
    <div class="cc-card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }">
      <div class="cc-card__titlewrapper">
        <h3 class="cc-card__category">{{ displayCategory (card.category) }}</h3>
        <h2 class="cc-card__title">{{ card.title }}</h2>
      </div>
    </div>
    <div class="cc-card__body">
      <p class="cc-card__description">{{ card.description }}</p>
      <v-btn flat @click="[updateList(index), like(card.category)]">nice</v-btn>
      <v-btn flat color="error" @click="[updateList(index), nope(card.category)]">dice</v-btn>
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
      this.$emit('like', cat)
    },
    nope: function (cat) {
      this.$emit('nope', cat)
    },
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
  transition: 500ms ease;
  transition-property: transform, opacity;
  width: 600px;

  &:nth-child(1) {
    transform: translate(-50%, 70px) scale(1);
    z-index: 3;
  }

  &:nth-child(2) {
    transform:  translate(-50%, 35px) scale(0.95);
    z-index: 2;
  }

  &:nth-child(3) {
    opacity: 1;
    transform: translate(-50%, 0) scale(0.9);
    z-index: 1;
  }

  &:nth-child(4) {
    opacity: 0;
    transform: translate(-50%, 35px) scale(0.85);
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
    margin-bottom: 30px;
  }
}
</style>
