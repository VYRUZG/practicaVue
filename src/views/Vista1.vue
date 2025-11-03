<template>
  <div class="vista1-container">
    <img src="@/assets/loginIcon.png" alt="Bienvenida" class="welcome-img" />
    <h1>¡Bienvenida!</h1>
    <p>Has iniciado sesión correctamente.</p>
 
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Vista1",
  data() {
    return {
      users: [
        { id: 1, name: "Diana", role: "Admin" },
        { id: 2, name: "Ana", role: "User" },
        { id: 3, name: "Felipe", role: "Editor" },
        { id: 4, name: "Angel", role: "Editor"},
        { id: 5, name: "Rodolfo", role: "Editor"}
      ]
    }
  }
}
</script>

<style scoped>
.page {
  padding: 20px;
}

table {
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #0ae0cf;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #ae40da;
  color:  white;
}
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
