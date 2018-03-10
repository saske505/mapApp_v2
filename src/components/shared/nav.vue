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
      </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed clipped-left app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      </v-toolbar>
 </div>
</template>

<script>
export default {
  data () {
    return {
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
      ]
    }
  }
}
</script>
