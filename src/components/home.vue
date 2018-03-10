<template>
  <div>
    <v-jumbotron color="light-blue" dark>
        <v-layout align-center>
          <v-flex text-xs-center>
            <v-map :zoom=13 :center="[47.413220, -1.219482]">
               <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
               <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
             </v-map>
          </v-flex>
        </v-layout>
   </v-jumbotron>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs4 v-for="catagory in catagories" :key="catagory.name">
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
            <span>{{ catagory.description }}</span>
          </div>
          </v-card-title>
            <v-card-text class="px-0"></v-card-text>
            <v-card-actions>
              <v-btn flat color="orange" :to="'/catagory/'+ catagory.name">See more</v-btn>
          </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    onCatagoryView (catagoryName) {
      this.$router.push('/catagory/' + catagoryName)
    }
  },
  computed: {
    catagories () {
      return this.$store.getters.loadedCatagories
    }
  }
}
</script>
