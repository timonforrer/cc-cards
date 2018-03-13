<template>
  <v-touch
    v-on:swipeleft="swipedLeft(card.category)"
    v-on:swiperight="swipedRight(card.category)"
    v-on:panstart="setXY"
    v-on:panend="resetXY"
    v-on:pan="updateMouseXY">
    <div
      id="getWidth"
      class="cc-card"
      v-bind:style="{ transform: 'translateX(' + x + 'px)' }">
      <div class="cc-card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }">
        <div class="cc-card__titlewrapper">
          <h3 class="cc-card__category">{{ card.category }}</h3>
          <h2 class="cc-card__title">{{ card.title }}</h2>
        </div>
      </div>
      <div class="cc-card__body">
        <p class="cc-card__description">{{ card.description }}</p>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  props: [
    'card'
  ],
  data () {
    return {
      originX: 0,
      originY: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    swipedRight (cat) {
      this.$emit('swipedRight', cat)
    },
    swipedLeft (cat) {
      this.$emit('swipedLeft', cat)
    },
    setXY () {
      this.originX = event.clientX
    },
    updateMouseXY () {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      let offset = (this.originX - event.clientX) * -1
      this.x = offset
      console.log(offset)
    },
    resetXY () {
      this.x = 0
    }
  }
}
</script>

<style lang="scss">
.cc-card {
  left: 0;
  right: 0;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2em 3em rgba(0, 0, 0, 0.07);
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  overflow: hidden;
  position: absolute;
  transition: opacity 500ms ease, transform 200ms ease;
  width: 600px;

  &:nth-child(1) {
    z-index: 2;
  }

  &:nth-child(2) {
    z-index: 1;
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
