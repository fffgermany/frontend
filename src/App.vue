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

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  #app {
    background-image: url(https://fridaysforfuture.de/erde_hell.svg);
    background-color: var(--primary-color);
    background-position: 120% 20%;
    background-size: 120%;
  }
</style>
