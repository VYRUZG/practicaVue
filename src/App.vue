<script>
import Navbar from './components/Navbar.vue';
import Formulario from './components/Form.vue';
export default{
  components: {
    Navbar,
    Formulario
  }
}
</script>

<template>
  <div id="app">
    <navbar />
    <div style="margin-top: 50px;">
      <Formulario />
    </div>
  </div>
</template>

<style>

</style>
