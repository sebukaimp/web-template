<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Definición de tipos
interface WebBonoType {
  contenido: { [key: string]: any };
  nombre: string;
  imagenes: { campo: string; texto: string }[];
  banner: string;
  bonoId: string;
  color: string;
  url: string;
}


const bonoData = ref<WebBonoType>({
  contenido: {},
  nombre: '',
  imagenes: [],
  banner: '',
  bonoId: '',
  color: '',
  url: '',
});

const loading = ref(true);
const error = ref<string | null>(null);

// Obtener el bonoId desde la URL
const route = useRoute();
const bonoId = route.params.bonoId as string;

// Llamada a la API
const fetchBonoData = async () => {
  try {
    const response = await fetch(
      `https://main.d3200t5poujf7w.amplifyapp.com/bono/locale/${bonoId}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos del bono');
    bonoData.value = await response.json();
  } catch (err) {
    error.value = (err as Error).message;
    console.error(error.value);
  } finally {
    loading.value = false;
  }
};

// Ejecutar la llamada 
onMounted(() => {
  fetchBonoData();
});
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div v-if="loading" class="text-center text-gray-500">Cargando los datos del bono...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <!-- Banner del bono -->
      <div class="w-full h-64 bg-cover bg-center rounded-lg mb-6"
        :style="{ backgroundImage: `url(${bonoData.banner})` }"></div>

      <!-- Nombre del bono -->
      <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ bonoData.nombre }}</h1>

      <!-- Información del bono -->
      <div class="space-y-4">
        <p class="text-lg text-gray-600">
          <strong>Condiciones:</strong> {{ bonoData.contenido?.condiciones?.info }}
        </p>
        <p class="text-lg text-gray-600">
          <strong>Información Final:</strong> {{ bonoData.contenido?.final?.info }}
        </p>
      </div>

      <!-- Galería de imágenes -->
      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-4">Imágenes</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img v-for="(img, index) in bonoData.imagenes" :key="index" :src="img.campo" :alt="img.texto"
            class="w-full h-32 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
