<template>
  <div id="app" :style="{ backgroundImage: `url(${require('@/assets/erde_hell.svg')})` }">
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
    min-height: 100vh;
    width: 100%;
    margin: 0;
  }

  #app {
    background-color: var(--primary-color);
    background-position: 120% 20%;
    background-size: 120%;
    background-attachment: fixed;
  }
</style>
