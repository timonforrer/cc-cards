<template>
  <v-touch
    class="index"
    v-on:swiperight="swipedRight"
    v-on:swipeleft="swipedLeft"
    v-on:panend="resetXY"
    v-on:pan="styles">

    <div
      class="cc-card"
      v-bind:style="{'transform':'translate(' + x + 'px,'+ y +'px) rotate(' + rot + 'deg)'}"
      v-bind:class="{ 'cc-card--inactive':(activeCard < index) }"
      >

      <div class="cc-card__image" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }">
        <div class="cc-card__titlewrapper">
          <h3 class="cc-card__category">{{ card.category }}</h3>
          <h2
          class="cc-card__title"
          >{{ card.title }}</h2>
        </div>
      </div>
      <div
        class="cc-card__body"
        v-bind:class="{
          'cc-card__body--administration':(card.category === 'Administration'),
          'cc-card__body--design':(card.category === 'Design'),
          'cc-card__body--informatik':(card.category === 'Informatik'),
          'cc-card__body--multimedia':(card.category === 'Multimedia')}"
        >
        <p class="cc-card__description">{{ card.description }}</p>
      </div>

    </div>

  </v-touch>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'card',
    'activeCard',
    'index'
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
      this.y = offsetY
      this.rot = offsetX / 100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/variables.scss";

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
  width: 600px;

  @media screen and (max-width: 380px) {
    box-shadow: none;
  }

  &--inactive {
    opacity: 0.3;
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

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    color: white;
    padding: 30px 30px 15px 30px;
    position: absolute;

    @media screen and (max-width: 380px) {
      padding: 20px 20px 7px 20px;
    }
  }

  &__title {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 2rem;
    letter-spacing: 0.1em;
    line-height: 2rem;
    margin: 1rem 0 0.5rem 0;
    text-transform: uppercase;

    @media screen and (max-width: 380px) {
      font-size: 1.2rem;
      line-height: 1.2rem;
      margin: 0.5rem 0 0.5rem 0;
    }
  }

  &__category {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    line-height: 1.1rem;
    opacity: 0.84;
    margin: 0;
  }

  &__body {
    padding: 30px;

    @media screen and (max-width: 380px) {
      padding: 20px;
    }

    &--administration {
      background: linear-gradient(to bottom right, $informatik-primary, $informatik-dark);
    }

    &--design {
      background: linear-gradient(to bottom right, $design-primary, $design-dark);
    }

    &--informatik {
      background: linear-gradient(to bottom right, $informatik-primary, $informatik-dark);
    }

    &--multimedia {
      background: linear-gradient(to bottom right, $multimedia-primary, $multimedia-dark);
    }
  }

  &__description {
    color: white;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    hyphens: auto;
    margin: 0;
    text-align: justify;

    @media screen and (max-width: 380px) {
      text-align: left;
    }
  }
}
</style>
