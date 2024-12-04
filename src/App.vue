<template>
  <div class="container mt-5">
    <h1 v-if="!isLoggedIn">Incia sesión para acceder a Home</h1>
    <h1 v-if="isLoggedIn">Sesión activa</h1>
    <div class="btn-group my-3">
      <router-link class="btn btn-primary" to="/">Home</router-link>
      <router-link class="btn btn-success" v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link class="btn btn-warning" v-if="!isLoggedIn" to="/signUp">Sign up</router-link>
      <button class="btn btn-danger" v-if="isLoggedIn" @click="logout">Cerrar Sesión</button>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>

import { auth, signOut, onAuthStateChanged } from './auth.js'


export default {

  data() {
    return {
      isLoggedIn: false
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {

      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }

      // this.isLoggedIn = user ? true : false
      // this.isLoggedIn = !!user

    })
  },
  methods: {
    async logout() {
      await signOut(auth)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped></style>