<script>
import { useRouter } from 'vue-router';
const router = useRouter()
export default {
  name: "NavVue"
}
</script>

<template>
  <div>
  <ul>
    <li><router-link to="/home">Inicio</router-link></li>
    <li><router-link to="/news">Noticias</router-link></li>
    <li><router-link to="/contact">Contacto</router-link></li>
    <li><router-link to="/about">Acerca de</router-link></li>
  </ul>
  <router-view></router-view>
</div>
</template>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
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
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

