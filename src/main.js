// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import Vue2Leaflet from 'vue2-leaflet'

import 'leaflet/dist/leaflet.css'

Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAvfJO-ktZF0b2_86PDCz5wAzFXYjyDwtQ',
      authDomain: 'fruity-5ddfc.firebaseapp.com',
      databaseURL: 'https://fruity-5ddfc.firebaseio.com',
      projectId: 'fruity-5ddfc',
      storageBucket: 'fruity-5ddfc.appspot.com'
    })
  }
})
