<template>
  <div>
    <v-navigation-drawer
     temporary
     clipped
     v-model="drawer"
     app>
    <v-list dense>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.path">
          <v-list-tile-action>
            <v-icon v-html="item.icon" v-bind:color="item.color"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
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
      </v-list>
     </v-navigation-drawer>
      <v-toolbar fixed clipped-left app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
        <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="(item, i) in items"
          :key="i"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
      </v-toolbar>
 </div>
</template>

<script>
export default {
  data () {
    return {
<<<<<<< HEAD
      drawer: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          path: '/'
        },
        {
          icon: 'home',
          title: 'test',
          path: '/'
        }
=======
      drawer: false    
    }
  },
  computed: {
    menuItems () {
      let items = [
        {icon: 'home', title: 'Home', path: '/'},
        {icon: 'face', title: 'Sign up', path: '/signup'},
        {icon: 'lock_open', title: 'Sign in', path: '/signin'}
>>>>>>> master
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
