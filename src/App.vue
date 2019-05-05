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
</style>
