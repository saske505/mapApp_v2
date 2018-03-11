<template>
  <div>
    <v-jumbotron color="light-blue" dark>
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
                  <span class="headline">{{ catagory.name }}</span>
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
              </v-toolbar>
             </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    catagories () {
      return this.$store.getters.loadedCatagories
    }
  }
}
</script>
