<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view /> <!-- Aquí se cargan HomeView y Vista1 -->
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
