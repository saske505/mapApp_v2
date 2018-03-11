<template>
  <div>
    <v-navigation-drawer
        clipped
        :mini-variant="mini"
        temporary
        v-model="drawer"
        app
        dark
      >
        <v-list dense>
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile dark value="true" v-for="(item, i) in items" :key="i" :to="item.path" color="white">
            <v-list-tile-action dark>
              <v-icon v-html="item.icon" color="white"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content dark color="white">
              <v-list-tile-title v-text="item.title" dark color="white"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
             v-if="userIsAuthenticated"
             @click="onLogout">
             <v-list-tile-action>
               <v-icon>exit_to_app</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>Logout</v-list-tile-content>
           </v-list-tile>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left dark>
        <v-toolbar-title>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="46" height="46"
               viewBox="0 0 252 252"
               style="fill:#000000;">
               <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                 <path d="M0,252v-252h252v252z" fill="none"></path><g id="Layer_1"><path d="M152.7645,151.1265c-6.70425,7.14 -16.2015,11.6235 -26.7645,11.6235c-20.2965,0 -36.75,-16.4535 -36.75,-36.75c0,-20.2965 16.4535,-36.75 36.75,-36.75v-68.25c-57.7395,0 -105,47.2605 -105,105c0,57.7395 47.2605,105 105,105c30.32925,0 57.7395,-12.831 76.42425,-33.243z" fill="#f39c12"></path>
                   <path d="M126,21v68.25c20.2965,0 36.75,16.4535 36.75,36.75h68.25c0,-57.7395 -47.2605,-105 -105,-105z" fill="#f1c40f"></path>
                   <path d="M162.75,126c0,11.718 -5.502,22.134 -14.049,28.85925l42.04725,53.6865c24.4755,-19.22025 40.25175,-49.014 40.25175,-82.54575z" fill="#b48200"></path></g>
                   <path d="M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z" fill="none"></path>
                   <path d="M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96h0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z" fill="none"></path>
              </g>
          </svg>
        </v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      </v-toolbar>
  <v-content>
      <router-view></router-view>
 </v-content>
  <app-footer></app-footer>
  </div>
</template>
<script>
import Footer from './footer'

export default {
  data () {
    return {
      drawer: null,
      mini: false,
      cliped: false
    }
  },
  components: {
    'app-footer': Footer
  },
  computed: {
    items () {
      let items = [
        {icon: 'home', title: 'Home', path: '/'},
        {icon: 'face', title: 'Sign up', path: '/signup'},
        {icon: 'lock_open', title: 'Sign in', path: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        items = [
          {icon: 'person', title: 'Profile', path: '/profile'}
        ]
      }
      return items
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
