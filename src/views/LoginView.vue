<template>
  <div>
    <h1>Login</h1>
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
            <button type="submit" :disabled='userStore.loadingUser'>iniciar sesion</button>
        </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user';
  const userStore = useUserStore()

  const email = ref("carloscumaco5@gmail.com")
  const password = ref("abc123a")

  // submit form to login pinia
  const  handleSubmit = async () => {   
    if (!email.value || password.value.length < 6) {
      return console.log("llena los campos");
    }
    await userStore.loginUser(email.value, password.value)
  }
</script>

<style>

</style>