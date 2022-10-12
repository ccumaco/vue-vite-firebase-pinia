<template>
  <div>
    <h1>editar</h1>
    <form action="" @submit.prevent='handleSubmit'>
        <input type="text" placeholder="Ingrese URL" v-model="url">
        <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script setup>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { useDatabaseStore } from "../stores/database"

    const databaseStore = useDatabaseStore()
    const route = useRoute()

    const handleSubmit = () => {
        databaseStore.updateUrl(route.params.id, url.valuew)
    }
    const url = ref("")

    onMounted ( async () => {
        url.value = await databaseStore.readUrl(route.params.id)
    })
    
</script>

<style>

</style>