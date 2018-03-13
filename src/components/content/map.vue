<template>
  <div>
    <v-toolbar
    floating
    dense
    light
    >
    <v-text-field prepend-icon='search' hide-details single-line></v-text-field>
    <v-btn icon>
      <v-icon>my_location</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  <v-map ref="map" :minZoom="minZoom" :crs="crs">
        <v-image-overlay :url="url" :bounds="bounds"></v-image-overlay>
        <v-marker v-for="star in stars" :lat-lng="star" :key="star.name">
          <v-popup :content="star.name"></v-popup>
        </v-marker>
        <v-polyline :lat-lngs="travel"></v-polyline>
      </v-map>
</div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data () {
    return {
      myMap: {},
      L: window.L,
      url: 'http://leafletjs.com/examples/crs-simple/uqm_map_full.png',
      bounds: [[-26.5, -25], [1021.5, 1023]],
      minZoom: -2,
      crs: window.L.CRS.Simple,
      stars: [
        { name: 'Sol', lng: 175.2, lat: 145.0 },
        { name: 'Mizar', lng: 41.6, lat: 130.1 },
        { name: 'Krueger-Z', lng: 13.4, lat: 56.5 },
        { name: 'Deneb', lng: 218.7, lat: 8.3 }
      ],
      travel: [[145.0, 175.2], [8.3, 218.7]]
    }
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-image-overlay': Vue2Leaflet.ImageOverlay,
    'v-marker': Vue2Leaflet.Marker,
    'v-popup': Vue2Leaflet.Popup,
    'v-polyline': Vue2Leaflet.Polyline
  },
  methods: {
    upDateMap () {
      return this.$refs
    }
  },
  mounted () {
    this.$refs.map.mapObject.setView([70, 120], 1)
    this.myMap = this.upDateMap()
  }
}
</script>
