<template>
  <div class="card-container">
    <div class="login-card">
      <form @submit.prevent="handleSubmit">
        <div class="imgcontainer">
          <img src="../assets/loginIcon.png" alt="Avatar" class="avatar"/>
        </div>

        <div class="container">
          <label for="email"><b>Email</b></label>
          <input 
            type="text" 
            v-model="email" 
            placeholder="Enter Email" 
            name="email" 
            required
          >

          <label for="psw"><b>Password</b></label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter Password" 
            name="psw" 
            required
          >

          <!-- Mensaje de error -->
          <transition name="fade">
            <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
          </transition>

          <button type="submit">Login</button>

          <label class="remember">
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>

        <div class="container footer-container">
          <button type="button" class="cancelbtn" @click="resetForm">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormVue",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    }
  },
  methods: {
    handleSubmit() {
      // Expresión regular para validar correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validación de correo
      if (!emailRegex.test(this.email)) {
        this.errorMessage = "⚠️ Por favor ingresa un correo electrónico válido.";
        return;
      }

      // Validación de contraseña
      if (this.password.length < 6) {
        this.errorMessage = "⚠️ La contraseña debe tener al menos 6 caracteres.";
        return;
      }

      // Si todo está correcto
      this.errorMessage = "";
      this.$router.push("/vista1");
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.errorMessage = "";
    }
  }
}
</script>

<style scoped>
.error-msg {
  color: red;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  background-color: #ffe6e6;
  border: 1px solid red;
  border-radius: 6px;
  padding: 8px;
}

/* Animación suave */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
