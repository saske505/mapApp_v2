<template>
  <v-jumbotron color="grey lighten-2">
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-3">{{ user.name }}</h3>
        <span class="subheading">{{ user.email }}</span>
        <v-divider class="my-3"></v-divider>
        <v-btn large color="primary" class="mx-0"></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      user: {
        id: '0',
        name: 'test user',
        email: 'test@test.commit',
        posts: [],
        avatar: 'test'
      }
    }
  }
}
</script>
