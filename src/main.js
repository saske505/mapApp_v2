// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.purple.base,
    accent: colors.purple.base,
    error: colors.purple.base
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIyRzOXRYzriVjb3DnqBoRMQdF1hvcMWI',
      authDomain: 'cropchat-a6b10.firebaseapp.com',
      databaseURL: 'https://cropchat-a6b10.firebaseio.com',
      projectId: 'cropchat-a6b10',
      storageBucket: 'cropchat-a6b10.appspot.com'
    })
  }
})
