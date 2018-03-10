<template>
  <div>
  <app-nav></app-nav>
  <v-content>
      <router-view></router-view>
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
