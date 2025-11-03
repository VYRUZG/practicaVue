<template>
  <ul>
    <li><router-link to="/vista1">Inicio</router-link></li>
    <li><router-link to="/vista2">Venta</router-link></li>
    <li><a href="#">Ventas</a></li>
    <li><a href="#">Contactos</a></li>
    <li><a href="#">Otros</a></li>
  </ul>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;           
  padding: 0;
  overflow: hidden;
  background-color: #333333;
  position: fixed;     /* 👈 Fijo arriba */
  top: 0;              
  width: 100%;         
  z-index: 1000;       
}

ul li {
  float: left;
}

ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #04AA6D;
  transition: 0.3s;
}

/* Quita cualquier margen/padding global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
