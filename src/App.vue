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
  body{
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #04AA6D, #434343);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #04AA6D, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
