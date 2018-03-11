<template>
  <v-container>
  <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ this.name }}</h6>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-btn :to="'/'">Back</v-btn>
  </v-container>
</template>
<script>
export default {
  props: ['name'],
  computed: {
    catagory () {
      return this.$store.getters.loadedCatagory(this.id)
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
