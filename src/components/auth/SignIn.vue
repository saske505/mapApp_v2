<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media height="200px" class="align-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="190" height="190"
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
          </v-card-media>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit" :disabled="loading" :loading="loading">
                        Sign in
                         <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
              <v-layout row v-if="error">
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Alert from '../shared/alert'

export default {
  components: {
    'app-alert': Alert
  },
  data () {
    return {
      email: '',
      password: '',
      text: 'Sign in'
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
