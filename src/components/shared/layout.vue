<template>
  <div>
  <app-nav></app-nav>
  <v-content>
  <v-container fill-height>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <router-view></router-view>
    </v-flex>
  </v-layout>
  </v-container>
</v-content>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './nav'
import Footer from './footer'

export default {
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>
