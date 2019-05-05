<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',

  components: { NavBar },
};
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  
  #app {
    background: #1B7340 url(https://fridaysforfuture.de/erde_hell.svg);
    background-color: rgb(27, 115, 64);
    background-position: 120% 20%;
    background-size: 120%;
  }
</style>
