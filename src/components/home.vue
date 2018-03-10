<template>
  <div>
    <v-jumbotron color="light-blue" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3"></h3>
          </v-flex>
        </v-layout>
      </v-container>
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
