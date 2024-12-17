<script setup lang="ts">
import { ref, onMounted } from "vue";

const bonos = ref<any[]>([]); // Lista de bonos
const pending = ref(false);   // Estado de carga
const error = ref<string | null>(null); // Error si falla la API

// Función para obtener los bonos desde la API
const fetchBonos = async () => {
  pending.value = true;
  error.value = null;

  try {
    const response = await fetch("https://main.d3200t5poujf7w.amplifyapp.com/bono/locale/3k9mpk");
    const data = await response.json();
    console.log("Datos recibidos:", data); // Verifica la estructura aquí
    bonos.value = data; // Asigna los datos a bonos
  } catch (err) {
    error.value = "No se pudo obtener los bonos.";
  } finally {
    pending.value = false
  }
};

const verLanding = (bonoId: string) => {
  if (!bonoId) {
    alert("No se encontró el ID del bono.");
    return;
  }
  alert(`Aquí cargaríamos la landing del bono con ID: ${bonoId}`);
};

// Llamar a la API cuando la página se monta
onMounted(() => {
  fetchBonos();
});
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Cargando -->
    <div v-if="pending" class="text-center my-8">
      <p>Cargando los bonos...</p>
    </div>

    <!-- Error -->
    <div v-if="error" class="text-center my-8 text-red-500">
      <p>{{ error }}</p>
    </div>

    <!-- Mostrar bonos -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">Bonos Disponibles</h1>
      <ul>
        <li v-for="(bono, index) in bonos" :key="index" class="mb-4 border p-4 rounded shadow">
          <h2 class="text-xl font-semibold">{{ bono.nombre || "Sin Nombre" }}</h2>

          <!-- Mostrar literales si existen -->
          <p v-if="bono.literales?.es?.titulo">{{ bono.literales.es.titulo }}</p>
          <p v-if="bono.literales?.es?.descripcion">{{ bono.literales.es.descripcion }}</p>

          <!-- Depurar bono -->
          <p>Debug: {{ bono }}</p>
          <p>Bono ID: {{ bono.bonoId }}</p>

          <!-- Botón para ver landing -->
          <button @click="verLanding(bono.bonoId)" class="mt-2 text-blue-500 underline">
            Ver Landing
          </button>
        </li>
      </ul>

    </div>
  </div>
</template>




<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

button {
  cursor: pointer;
}
</style>
