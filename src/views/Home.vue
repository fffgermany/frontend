<template>
  <div class="home">
    <l-map class="map" ref="map" :center="center" :zoom=7 :options="mapOptions">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>

import L from 'leaflet';
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: 'home',
  data() {
    return {
      mapOptions: {},
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      center: new L.LatLng(50.9, 10.6),
    };
  },
  components: {
    LMap,
    LTileLayer,
  },
};
</script>

<style lang="scss">

  .home {
    height: 100%;
    width: 100%;
  }

</style>
