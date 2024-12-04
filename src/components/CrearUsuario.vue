<template>
  <div class="register-container d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow-sm rounded-3">
      <h2 class="text-center mb-4 text-primary">Crear una Cuenta</h2>
      <form @submit.prevent="register" class="needs-validation" novalidate>
        <div class="form-group mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input 
            id="email" 
            class="form-control form-control-lg rounded-3" 
            type="email" 
            v-model="email" 
            placeholder="Introduce tu correo electrónico" 
            required>
          <div class="invalid-feedback">
            Por favor, introduce un correo electrónico válido.
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input 
            id="password" 
            class="form-control form-control-lg rounded-3" 
            type="password" 
            v-model="password" 
            placeholder="Introduce tu contraseña" 
            required>
          <div class="invalid-feedback">
            La contraseña es requerida.
          </div>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary btn-lg mt-3" type="submit">Registrarse</button>
        </div>
      </form>
      <div class="mt-4 text-center">
        <p>¿Ya tienes una cuenta? <router-link to="/login" class="text-decoration-none text-primary">Inicia sesión aquí</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '../auth.js';

export default {
  name: 'CrearUsuario',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("Usuario creado", userCredential);
        this.email = '';
        this.password = '';
        // Redirigir a la página de inicio (Home) después de crear el usuario
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
}

.card {
  max-width: 400px;
  width: 100%;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.form-label {
  font-weight: bold;
}
</style>
