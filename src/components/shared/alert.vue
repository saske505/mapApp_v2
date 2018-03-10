<template>
    <v-alert error dismissible @input="onClose" :value="true" @dismissed="onDismissed" v-model="alert">
      {{ text }}
    </v-alert>
</template>
<script>
export default {
  props: ['text'],
  data () {
    return {
      alert: true
    }
  },
  methods: {
    onClose () {
      this.$emit('dismissed')
    },
    onDismissed () {
      console.log('dismissed')
      this.$store.dispatch('clearError')
    }
  }
}
</script>
