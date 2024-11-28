<script lang="ts" setup>
import { loadNuxtConfig } from 'nuxt/kit';
import type { EmbedHTMLAttributes } from 'vue';

//deinir interfaz (datos typo)

interface usersType {
  id: number,
  username: string,
  email: string,
  adress: string[]


}
const loading = ref(false)


async function fetchUsers() {
  loading.value = true
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const users = await $fetch<usersType>(apiUrl)
  loading.value = false
  console.log(users)



}

fetchUsers()

</script>

<template>
  <div>
    <h1 class="text-center p-10 font-mono">Usuarios</h1>
    <pre>{{ }}</pre>
  </div>
</template>

<style></style>