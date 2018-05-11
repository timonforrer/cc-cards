<template>
  <div>
    <div
      class="card"
      v-bind:class="{
        'card--animated-right':(direction === 'right'),
        'card--animated-left':(direction === 'left')}"
      >
      <div class="card__head">
        <div class="card__top-wrapper">
          <div class="card__category"></div>
          <div class="card__title"></div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__text card__text--full"></div>
        <div class="card__text card__text--full"></div>
        <div class="card__text card__text--end"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPreloader',
  props: [
    'direction'
  ],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import "../sass/variables.scss";

@keyframes right {
  from {
    transform: translateX(0) rotate(0);
    opacity: 1;
  }

  to {
    transform: translateX(300px) rotate(10deg);
    opacity: 0;
  }
}

@keyframes left {
  from {
    transform: translateX(0) rotate(0);
    opacity: 1;
  }

  to {
    transform: translateX(-300px) rotate(-10deg);
    opacity: 0;
  }
}

.card {
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  margin: 3em auto 0 auto;
  max-width: 420px;

  &__head {
    padding-top: 56.25%;
    position: relative;
  }

  &__top-wrapper {
    bottom: 0;
    box-sizing: border-box;
    padding: 16px;
    position: absolute;
    widows: 100%;
  }

  &__category {
    background-color: #FFFFFF;
    border-radius: 2px;
    height: 1em;
    margin-bottom: 0.5em;
    opacity: 0.4;
    width: 100px;
  }

  &__title {
    background-color: #FFFFFF;
    border-radius: 3px;
    height: 2em;
    opacity: 0.4;
    width: 250px;
  }

  &__body {
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 24px 16px;
    opacity: 0.5;
  }

  &__text {
    background-color: $informatik-primary;
    border-radius: 2px;
    height: 1em;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }

    &--full {
      width: 100%;
    }

    &--end {
      width: 70%;
    }
  }

  &--animated {
    &-right {
      animation: right 4s infinite;
    }
    &-left {
      animation: left 4s infinite;
    }
  }
}
</style>
