<template>
  <div>
    <v-container grid-list-md text-xs-left class="container">
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="display-3 mt-3 mb-2">Adminpage</h3>
        </v-flex>
        <v-flex xs12 md6>
          <cc-add></cc-add>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ccAddCard from './ccAddCard.vue'

export default {
  name: 'AdminPage',
  components: {
    'cc-add': ccAddCard
  },
  data () {
    return {
      category: [
        'Multimedia',
        'Design',
        'Informatik',
        'Administration'
      ],
      select: null
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  width: 800px;
}
</style>
