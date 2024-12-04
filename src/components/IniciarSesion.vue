<template>
    <div class="login-container d-flex justify-content-center align-items-center">
      <div class="card p-4 shadow-sm rounded-3">
        <h2 class="text-center mb-4 text-success">Iniciar Sesión</h2>
        <form @submit.prevent="signIn" class="needs-validation" novalidate>
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
            <button class="btn btn-success btn-lg mt-3" type="submit">Iniciar Sesión</button>
          </div>
        </form>
        <div class="mt-4 text-center">
          <p>¿No tienes una cuenta? <router-link to="/signUp" class="text-decoration-none text-success">Regístrate aquí</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { auth, signInWithEmailAndPassword } from '../auth.js';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async signIn() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          const redirectPath = this.$route.query.redirect || '/';
          this.$router.push(redirectPath);
        } catch (error) {
          console.error("Error al iniciar sesión", error.message);
          alert("Error al iniciar sesión: " + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 2rem;
  }
  
  .card {
    max-width: 400px;
    width: 100%;
  }
  
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
  
  .form-label {
    font-weight: bold;
  }
  </style>
  