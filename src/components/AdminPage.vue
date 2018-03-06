<template>
  <div>
    <v-container grid-list-md text-xs-left class="container">
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="display-3 mt-3 mb-2">Adminpage</h3>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Add new card</h3>
                <div>Fill in all information and submitt to add a new card to the quiz.</div>
              </div>
            </v-card-title>
            <v-container>
              <v-form>
                <v-select
                  label="Category"
                  v-model="select"
                  :items="category"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
                <v-text-field
                  label="Task Title"
                  required
                >
                </v-text-field>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-btn flat color="orange">Add Card</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
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
