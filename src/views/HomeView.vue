<template>
  <div>
    <h1>hoime</h1>
    <button @click='userStore.logoutUser()'>Logout</button>
    </div>
</template>

<script setup>
  import { onAuthStateChanged } from '@firebase/auth'; 
  import { auth } from '../firebaseConfig';
  import  { useUserStore } from "./../stores/user"
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  })
  
  const userStore = useUserStore()

</script >