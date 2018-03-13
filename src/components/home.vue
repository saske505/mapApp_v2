<template>
  <div>
    <v-jumbotron color="light-blue" dark>
    <v-layout align-center>
        <app-map></app-map>
    </v-layout>
  </v-jumbotron>
  <v-container grid-list-md text-xs>
    <v-layout row wrap>
      <v-flex xs4 v-for="catagory in catagories" :key="catagory.id">
        <v-card fill-height dark color="primary" style="height:100%!important;">
          <v-card-media
          class="white--text"
          height="auto"
          src=""
          >
          <v-container fluid fill-height>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline6">{{ catagory.name }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span>Reported : {{ catagory.count }}</span>
          </div>
        </v-card-title>
        <v-card-text class="px-0"></v-card-text>
        <v-card-actions>
          <v-btn small color="white" light :to="'/catagory/'+ catagory.id">See more</v-btn>
          <v-btn
          color="secondary"
          dark
          small
          absolute
          bottom
          right
          fab
          @click.stop="dialog = true"
          >
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
  <v-dialog
  v-model="dialog"
  fullscreen
  transition="dialog-bottom-transition"
  :overlay="false"
  scrollable
  >
  <v-card>
    <v-toolbar card dark color="primary">
      <v-btn icon @click.native="dialog = false" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Add incident</v-toolbar-title>
    </v-toolbar>
    <v-card-media src="" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0"></h3>
        <div></div>
      </div>
    </v-card-title>
    <v-flex xs10 offset-xs1>
      <v-card-text>
        <v-form>
          <v-text-field
          label="Name"
          required
          ></v-text-field>
          <v-text-field
          label="E-mail"
          required
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-flex>
  </v-card>
</v-dialog>
</v-layout>
</v-container>
<v-snackbar
:timeout="timeout"
:color="color"
:multi-line="mode === 'multi-line'"
:vertical="mode === 'vertical'"
v-model="snackbar"
>
{{ text }}
<v-btn dark flat @click.native="snackbar = false">Close</v-btn>
</v-snackbar>
</div>
</template>
<script>
import Map from './content/map'

export default {
  name: 'Home',
  components: {
    'app-map': Map
  },
  data () {
    return {
      dialog: false,
      snackbar: false,
      color: '',
      mode: '',
      timeout: 6000,
      text: ''
    }
  },
  computed: {
    catagories () {
      return this.$store.getters.loadedCatagories
    }
  }
}
</script>
