<template>
  <v-touch
    v-on:swipeleft="swipedLeft"
    v-on:swiperight="swipedRight"
    v-on:panend="resetXY"
    v-on:pan="styles"
    class="index">
    <div
      id="getWidth"
      class="cc-card"
      v-bind:style="{'transform':'translate(' + x + 'px,'+ y +'px) rotate(' + rot + 'deg)'}">
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
      x: 0,
      y: 0,
      rot: 0
    }
  },
  methods: {
    swipedRight (cat) {
      this.$emit('swipedRight')
    },
    swipedLeft (cat) {
      this.$emit('swipedLeft')
    },
    resetXY () {
      this.y = 0
      this.x = 0
      this.rot = 0
    },
    styles (e) {
      let offsetX = e.deltaX
      let offsetY = e.deltaY
      this.x = offsetX
      this.y = offsetY / 10
      this.rot = offsetX / 100
    }
  }
}
</script>

<style lang="scss">
.index {
  position: relative;

  &:first-child {
    z-index: 3;
  }
  &:nth-child(2) {
    z-index: 2;
  }
}

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
  transition: opacity 500ms ease;
  width: 600px;

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
