<template>
  <v-app>
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

          <input type="file"
            @change="getImage($event)">

          <v-btn
            color="info"
            depressed
            class="btn--nomargin-left"
            @click="pushImage(image)">Upload</v-btn>

          <div v-show="showProgress">
            <p>{{ value }}&nbsp;&percnt;</p>
            <v-progress-linear
              v-model="value"
              :height="4">
            </v-progress-linear>
          </div>

          <img :src="uploadedImage" v-if="imageShown" class="image">

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
  </v-app>
</template>

<script>
import {db, storage} from '../firebase'

export default {
  name: 'ccAddCard',
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
      uploadedImage: '',
      title: '',
      titleRules: [
        v => !!v || 'Title is required'
      ],
      imageShown: false,
      uploadTask: '',
      value: 0,
      showProgress: false
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
    getImage (event) {
      this.image = event.target.files[0]
    },
    pushImage (file) {
      this.showProgress = true

      // create the file *prefix*
      let date = new Date()
      let month = date.getMonth() + 1
      let name = date.getHours() + '-' + date.getMinutes() + '-' + date.getDate() + '-' + month + '-' + date.getFullYear()

      // create a storage reference
      let storageRef = storage.ref('cards/' + name + file.name)

      // upload file
      this.uploadTask = storageRef.put(file)

      // get progress
      this.uploadTask.then(snapshot => {
        this.uploadedImage = this.uploadTask.snapshot.downloadURL
        this.imageShown = true
      })
    },
    submit () {
      this.id = this.cards.length + 1
      if (this.$refs.form.validate() && this.uploadedImage !== '') {
        this.$firebaseRefs.cards.push({
          title: this.title,
          category: this.category,
          description: this.description,
          image: this.uploadedImage,
          id: this.id
        })
        this.$refs.form.reset()
        this.image = ''
        this.uploadedImage = ''
        this.imageShown = false
        this.value = 0
        this.id = 0
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.value = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  &--nomargin-left {
    margin-left: 0;
  }
}

.image {
  max-width: 100%;
}
</style>
