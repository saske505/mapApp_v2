<template>
  <div id="app">
    <v-app>
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
  @import './stylus/main';
</style>
