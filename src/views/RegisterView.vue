<template>
  <div>
    <h1>Register</h1>
        <form action="" @submit.prevent='handleSubmit'>
            <input
              type="text"
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
              autocomplete
              >
            <button type="submit" :disabled='userStore.loadingUser'>Crear usuario</button>
        </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user';
  const userStore = useUserStore()

  const email = ref("carloscumaco5@gmail.com")
  const password = ref("abc123a")
 
  // submit form to register pinia
  const  handleSubmit = async () => {   
    if (!email.value || password.value.length < 6) {
      return console.log("llena los campos");
    }
    await userStore.registerUser(email.value, password.value)
  }
</script>

<style>

</style>