<template>
  <div v-bind:class="{'outer--animated': activeCard == 1, 'outer--standard': activeCard != 1}" class="outer">
    <div class="cc-slides-wrapper">
      <div
        v-if="activeCard == 1"
        class="cc-slide"
      >
        <h1 class="cc-slide__title">
          Mediamatiker Quiz
        </h1>
        <p class="cc-slide__description">
          Finde heraus, ob Mediamatiker dein Traumberuf ist.
        </p>

        <button
          class="cc-slide__cta cc-slide__cta--center"
          v-on:click="activeCard = activeCard + 1"
        >
          Starten
        </button>
      </div>

      <div
        class="cc-slide"
        v-if="activeCard == 2"
      >
        <h2 class="cc-slide__title">
          Right is alright.
        </h2>
        <p class="cc-slide__description">
          Magst du die Tätigkeit, die auf der Karte beschrieben wird? Dann swipe nach rechts.
        </p>

        <cc-card-preloader :direction="'right'"></cc-card-preloader>
        <div class="cc-slide__cta-group">
          <button
            class="cc-slide__cta cc-slide__cta--inline"
            v-on:click="activeCard = activeCard - 1"
          >
            Zurück
          </button>
          <button
            class="cc-slide__cta cc-slide__cta--inline"
            v-on:click="activeCard = activeCard + 1"
          >
            Weiter
          </button>
        </div>
      </div>

    <div
        class="cc-slide"
        v-if="activeCard == 3"
      >
        <h2 class="cc-slide__title">
          Better left out.
        </h2>
        <p class="cc-slide__description">
          Sagt dir die Tätigkeit nicht zu, dann swipe nach links.
        </p>

        <cc-card-preloader :direction="'left'"></cc-card-preloader>
        <div class="cc-slide__cta-group">
          <button
            class="cc-slide__cta cc-slide__cta--inline"
            v-on:click="activeCard = activeCard - 1"
          >
            Zurück
          </button>
          <router-link class="cc-slide__cta cc-slide__cta--inline" tag="button" to="quiz">
            Quiz starten
          </router-link>
        </div>
      </div>

      </div>

      <div
        class="cc-slide-card"
        v-if="activeCard == 4"
      >
    </div>
  </div>
</template>

<script>
import CardPreloader from './CardPreloader'

export default {
  components: {
    'cc-card-preloader': CardPreloader
  },
  name: 'onboarding',
  data () {
    return {
      activeCard: 1
    }
  },
  onIdle () {
    if (this.activeCard !== 1) {
      this.activeCard = 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../sass/variables.scss";

body {
  margin: 0;
}

.outer {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 1em;
}

.outer--animated {
  animation-name: colours;
  animation-duration: 12s;
  animation-iteration-count: infinite;
}

.outer--standard {
  background-color: $informatik-primary;
}

.container {
  margin: 0 auto;
  max-width: 640px;
  position: relative;
}

.cc-slide {
  &__title {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    font-size: 2.3em;
    margin-bottom: 0em;
  }

  &__description {
    font-family: 'Open Sans', sans-serif;
  }

  &__cta-group {
    margin-top: 5em;
    text-align: center;
  }

  &__cta {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 3px;
    color: white;
    display: block;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    padding: 0.5em 2em;
    position: relative;
    text-transform: uppercase;

    &--center {
      margin-top: 5em;
    }

    &--inline {
      display: inline-block;
    }
  }
}

@keyframes colours {
  0% {
      background-color: $informatik-primary;
    }
  25% {
      background-color: $administration-primary;
    }
  50% {
      background-color: $multimedia-primary;
    }
  75% {
      background-color: $design-primary;
  }
  100% {
      background-color: $informatik-primary;
  }
}

</style>
