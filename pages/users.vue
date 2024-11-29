<script lang="ts" setup>
import { ref } from 'vue';

// Definir la interfaz para los usuarios
interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const loading = ref(false);
const users = ref<UserType[]>([]);
const error = ref<string | null>(null);

// Función para obtener los usuarios con retraso
async function fetchUsers() {
  loading.value = true;
  error.value = null;

  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Simular un retraso de 2 segundos antes de mostrar los datos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    users.value = await $fetch<UserType[]>(apiUrl);
  } catch (err) {
    error.value = 'Error al cargar los usuarios.';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

// Llamar la función al montar el componente
fetchUsers();
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Título -->
    <h1 class="p-10 text-3xl font-bold text-center text-gray-800">Usuarios</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-center text-gray-500">
      <p>Cargando usuarios...</p>
    </div>

    <!-- Error -->
    <div v-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <!-- Lista de usuarios -->
    <div v-if="!loading && users.length" class="max-w-4xl mx-auto">
      <ul class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <li
          v-for="user in users"
          :key="user.id"
          class="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
        >
          <h2 class="text-lg font-semibold text-gray-800">{{ user.name }}</h2>
          <p class="text-sm text-gray-600">Usuario: {{ user.username }}</p>
          <p class="text-sm text-gray-600">Email: {{ user.email }}</p>
          <p class="mt-2 text-sm text-gray-500">
            Dirección: {{ user.address.street }}, {{ user.address.city }}
          </p>
        </li>
      </ul>
    </div>

    <!-- Sin usuarios -->
    <div v-if="!loading && users.length === 0" class="text-center text-gray-500">
      <p>No se encontraron usuarios.</p>
    </div>
  </div>
</template>

<style scoped></style>
