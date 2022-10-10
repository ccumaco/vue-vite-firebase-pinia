<template>
  <div>
    <h1>Register</h1>
        <form action="" @submit.prevent='handleSubmit'>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              v-model.trim='email'
              >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              v-model.trim='password'
              >
            <button type="submit">Crear usuario</button>
        </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import { useUserStore } from '../stores/user';
  const userStore = useUserStore()

  const email = ref("carlos@test.com")
  const password = ref("123123")

  const  handleSubmit = () => {
    if (!email.value || password.value.length < 6) {
      return console.log("llena los campos");
    }
    userStore.registerUser(email.value, password.value)
  }
</script>

<style>

</style>