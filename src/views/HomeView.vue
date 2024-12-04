<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth.js";

export default {
  name: "Home",
  data() {
    return {
      userEmail: "",
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userEmail = user.email;
      } else {
        this.$router.push({ name: "login" });
      }
    });
  },
};
</script>

<template>
  <main class="home-container d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h1 class="mb-4">Bienvenido a la página principal</h1>
      <p v-if="userEmail" class="lead mt-4">Estás conectado como: <strong>{{ userEmail }}</strong></p>
      <p v-else class="lead mt-4">No hay un usuario conectado.</p>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.25rem;
  color: #555;
}
</style>
