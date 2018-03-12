<template>
  <div>
    <v-jumbotron color="light-blue" dark>
      <v-toolbar
      floating
      dense
      light
      >
      <v-text-field prepend-icon="search" hide-details single-line></v-text-field>
      <v-btn icon  @click="myFilter" v-bind:class="{ isActive: isActive }" @click.native="snackbar = true">
        <v-icon>my_location</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
        <v-layout align-center>
          <v-flex text-xs-center>
  <v-map ref="map" :zoom=13 :center="[47.413220, -1.219482]">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
    <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
  </v-map>
</v-flex>
</v-layout>
   </v-jumbotron>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs4 v-for="catagory in catagories" :key="catagory.id">
          <v-card fill-height dark color="primary" style="height:100%!important;">
            <v-card-media
            class="white--text"
            height="auto"
            src="/static/doc-images/cards/docks.jpg"
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
              <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
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
                    <app-select></app-select>
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
import Select from './shared/select'

export default {
  name: 'Home',
  components: {
    'app-select': Select
  },
  data () {
    return {
      dialog: false,
      isActive: false,
      snackbar: false,
      color: '',
      mode: '',
      timeout: 6000,
      text: 'Hello, I\'m a snackbar'
    }
  },
  computed: {
    catagories () {
      return this.$store.getters.loadedCatagories
    }
  },
  methods: {
    myFilter () {
      this.isActive = !this.isActive
      if (this.isActive === true) {
        this.geoLoc(this.isActive)
      } else {
        this.geoLoc(this.isActive)
      }
    },
    geoLoc (status) {
      this.color = 'dark'
      if (status === true) {
        this.text = status
      } else {
        this.text = status
      }
    }
  }
}
</script>
