<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Definir la interfaz para los usuarios
interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const route = useRoute();
const router = useRouter();
const user = ref<UserType | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

// Función para obtener los detalles del usuario
async function fetchUserDetails() {
  const userId = route.params.id;

  if (!userId) {
    error.value = 'Usuario no encontrado.';
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    user.value = await $fetch<UserType>(apiUrl);
  } catch (err) {
    error.value = 'Error al cargar los detalles del usuario.';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

// Llamar la función al montar el componente
onMounted(fetchUserDetails);
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="p-10">
      <button
        @click="router.push('/users')"
        class="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600"
      >
        Volver a Usuarios
      </button>
    </div>

    <div v-if="loading" class="text-center text-gray-500">
      <p>Cargando detalles del usuario...</p>
    </div>

    <div v-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <div v-if="!loading && user" class="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow">
      <h1 class="text-2xl font-bold text-gray-800">{{ user.name }}</h1>
      <p class="text-sm text-gray-600">Usuario: {{ user.username }}</p>
      <p class="text-sm text-gray-600">Email: {{ user.email }}</p>
      <p class="text-sm text-gray-600">Teléfono: {{ user.phone }}</p>
      <p class="text-sm text-gray-600">Website: <a :href="'http://' + user.website" class="text-blue-500 underline">{{ user.website }}</a></p>
      <p class="mt-4 text-sm text-gray-500">
        Dirección: {{ user.address.street }}, {{ user.address.city }} ({{ user.address.zipcode }})
      </p>
    </div>
  </div>
</template>

<style scoped></style>
