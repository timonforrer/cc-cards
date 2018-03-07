<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Add new card</h3>
        <div>Fill in all information and submit in order to add a new card to the quiz.</div>
      </div>
    </v-card-title>
    <v-container>
      <v-form v-model="valid" ref="form">
        <v-text-field
          label="Title"
          v-model="title"
          :rules="titleRules"
          required
        ></v-text-field>

        <v-select
          label="Category"
          v-model="category"
          :items="categories"
          :rules="categoryRules"
          required
        ></v-select>

        <v-text-field
          label="Description"
          v-model="description"
          :rules="descriptionRules"
          multi-line
          required
        ></v-text-field>

        <v-card-actions>
          <v-btn
            @click="submit"
            :disabled="!valid"
            flat
            color="orange">
              submit
          </v-btn>

          <v-btn @click="clear"
            flat>
              clear
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import {db} from '../firebase'

export default {
  data () {
    return {
      cards: {},
      valid: false,
      category: null,
      categoryRules: [
        v => !!v || 'Category is required'
      ],
      categories: [
        'Design',
        'Multimedia',
        'Informatik',
        'Administration'
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
      id: null,
      image: '',
      imageRules: [
        v => !!v || 'Image is required'
      ],
      title: '',
      titleRules: [
        v => !!v || 'Title is required'
      ]
    }
  },
  firebase: {
    cards: {
      source: db.ref('cards'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        this.$firebaseRefs.cards.push({
          title: this.title
        })
        console.log(this.title)
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
