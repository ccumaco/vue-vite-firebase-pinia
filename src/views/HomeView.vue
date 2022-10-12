<template>
  <div>
    <h1>hoime</h1>
    <p>{{userStore.userData?.email}}</p>

    <form action="" @submit.prevent='handleSubmit'>
      <input type="text" placeholder="ingrese URL" v-model="url">
      <button type="submit">Agregar url</button>
    </form>

    <ul>
      <p v-if="databaseStore.loadingDocs">loading...</p>
      <li v-else v-for="(item, index) of databaseStore.documents" :key='index'>
        {{item.name}}
        <button @click='router.push(`/profile/${item.id}`)'>Editar</button>
        <button @click='databaseStore.deleteUrl(item.id)'>Eliminar</button>
      </li>
    </ul>
    <button @click='userStore.logoutUser()'>Logout</button>
    </div>
</template>

<script setup>
  import { useRoute } from "vue-router"
  import  { useUserStore } from "./../stores/user"
  import  { useDatabaseStore } from "./../stores/database"
import { ref } from "vue"
import router from "../router";
  
  const userStore = useUserStore()
  const databaseStore = useDatabaseStore()
  databaseStore.getUrls()
  const url = ref("")

  const handleSubmit = () => {
    databaseStore.addUrl(url.value)
  }
</script>