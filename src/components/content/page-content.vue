<template>
  <v-jumbotron color="grey lighten-2">
   <v-container fill-height>
     <v-layout row wrap v-if="loading">
         <v-flex xs12 class="text-xs-center">
           <v-progress-circular
             indeterminate
             class="primary--text"
             :width="7"
             :size="70"></v-progress-circular>
         </v-flex>
       </v-layout>
     <v-layout align-center v-else>
       <v-flex>
         <h6 class="display-1">{{ catagory.name }}</h6>
         <span class="subheading">{{ catagory.description }}</span>
         <v-divider class="my-3"></v-divider>
         <div class="title mb-3"></div>
         <v-btn large color="primary" class="mx-0"  :to="'/'">Back</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
 </v-jumbotron>
</template>
<script>
export default {
  props: ['id'],
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
