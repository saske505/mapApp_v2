<template>
  <div>
    <v-toolbar
    floating
    dense
    light
    >
    <v-select
         autocomplete
         :loading="loading"
         cache-items
         required
         :items="items"
         :rules="[() => select.length > 0 || 'You must choose at least one']"
         :search-input.sync="search"
         v-model="select"
         placeholder="search"
       ></v-select>
       <v-btn icon>
         <v-icon>my_location</v-icon>
       </v-btn>
       <v-btn icon>
         <v-icon>more_vert</v-icon>
       </v-btn>
  </v-toolbar>

  <v-map class="mini-map" ref="myMap" :zoom="myZoom" :center="myCenter">
    <v-tilelayer :url="url" :attribution="attribution" ></v-tilelayer>
    <v-marker v-for="item in markers"
    :key="item.id"
    :lat-lng="item.position"
    :visible="item.visible"
    :draggable="true"
    :tooltip="item.tooltip">
    <v-popup :content="item.tooltip">
    </v-popup>
  </v-marker>
</v-map>
</div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet'
import L from 'leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import 'leaflet/dist/leaflet.css'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  data () {
    return {
      loading: false,
      search: null,
      select: [],
      items: [],
      provider: new OpenStreetMapProvider(),
      myZoom: 10,
      myCenter: new L.LatLng(41, -1.219482),
      zoom: 10,
      center: [41, -1.219482],
      myMap: {},
      L: window.L,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '',
      markers: [
        { id: '1', position: {lat: 51.505, lng: -0.09}, tooltip: 'tooltip for marker1', draggable: true, visible: true },
        { id: '2', position: {lat: 51.895, lng: -0.09}, tooltip: 'tooltip for marker2', draggable: true, visible: true },
        { id: '3', position: {lat: 52.005, lng: -0.09}, tooltip: 'tooltip for marker3', draggable: true, visible: true },
        { id: '4', position: {lat: -30.705, lng: 20.09}, tooltip: 'tooltip for marker4', draggable: true, visible: true }
      ],
      crs: window.L.CRS.Simple
    }
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-image-overlay': Vue2Leaflet.ImageOverlay,
    'v-marker': Vue2Leaflet.Marker,
    'v-popup': Vue2Leaflet.Popup,
    'v-polyline': Vue2Leaflet.Polyline
  },
  computed: {
    ttip: function () {
      return this.draggable
    }
  },
  watch: {
    search (val) {
      this.provider.search({ query: val }).then((results) => {
        this.items = Object.keys(results).map(i => results[i].label)
      })
    }
  },
  methods: {
    querySelections (v) {
      this.loading = true
      setTimeout(() => {
        this.items = Object.keys(this.provider).filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  }
}
</script>
