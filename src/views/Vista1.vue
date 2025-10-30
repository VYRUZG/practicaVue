<template>
  <div class="vista1-container">
    <img src="@/assets/loginIcon.png" alt="Bienvenida" class="welcome-img" />
    <h1>¡Bienvenida!</h1>
    <p>Has iniciado sesión correctamente.</p>
  </div>
</template>

<script>
export default {
  name: "Vista1",
};
</script>

<style scoped>
.vista1-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
}

.welcome-img {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  color: #04AA6D;
  font-size: 32px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #333;
}
</style>
