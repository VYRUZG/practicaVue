<template>
  <div class="card-container">
    <div class="login-card">
      <form @submit.prevent="handleSubmit">
        <div class="imgcontainer">
          <img src="@/assets/loginIcon.png" alt="Mi imagen" style="width: 150px; height: auto;" />
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

          <button type="submit">Login</button>

          <label class="remember">
            <input type="checkbox" checked="checked" name="remember"> recuerdame
          </label>
        </div>

        <div class="container footer-container">
          <button type="button" class="cancelbtn" @click="resetForm">Cancelar</button>
          <span class="psw">Olvidaste <a href="#">tu contraseña?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "FormVue",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    handleSubmit() {
      // Expresión regular para validar correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validación del email
      if (!emailRegex.test(this.email)) {
        Swal.fire({
          icon: 'error',
          title: 'Correo inválido',
          text: 'Por favor ingresa un correo electrónico válido.',
          confirmButtonColor: '#04AA6D'
        });
        return;
      }

      // Validación de contraseña
      if (this.password.length < 6) {
        Swal.fire({
          icon: 'warning',
          title: 'Contraseña incorrecta',
          text: 'La contraseña debe tener al menos 6 caracteres.',
          confirmButtonColor: '#04AA6D'
        });
        return;
      }

      // Si todo está correcto
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenida!',
        confirmButtonColor: '#04AA6D'
      }).then(() => {
        this.$router.push('/vista1');
      });
    },
    resetForm() {
      this.email = "";
      this.password = "";
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Bordered form */
form {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
}

input[type=text]:focus, input[type=password]:focus {
  border-color: #04AA6D;
  outline: none;
  box-shadow: 0 0 0 2px rgba(4, 170, 109, 0.1);
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
  margin-right: 10px;
}

.cancelbtn:hover {
  box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  padding: 0 16px;
}

/* Avatar image */
img.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #04AA6D;
  padding: 4px;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

.footer-container {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* The "Forgot password" text */
span.psw {
  padding-top: 0;
}

.psw a {
  color: #04AA6D;
  text-decoration: none;
}

.psw a:hover {
  text-decoration: underline;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 14px;
  color: #555;
}

/* Responsive adjustments */
@media screen and (max-width: 480px) {
  .card-container {
    padding: 10px;
  }

  .login-card {
    max-width: 100%;
  }

  .footer-container {
    flex-direction: column;
    gap: 10px;
  }

  .cancelbtn {
    width: 100%;
    margin-right: 0;
  }

  span.psw {
    float: none;
    text-align: center;
  }
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}
</style>
