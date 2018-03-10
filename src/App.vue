<template>
  <div id="app">
    <v-app light-blue>
    <app-layout></app-layout>
  </v-app>
  </div>
</template>

<script>
import layout from './components/shared/layout'
export default {
  name: 'App',
  components: {
    'app-layout': layout
  }}
</script>

<style lang="stylus">
  $color-pack = false
  @import '~vuetify/src/stylus/main'
</style>
