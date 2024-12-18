<script setup>
defineProps({
  bonoData: {
    type: Object,
    required: true,
  },
});
</script>


<template>
  <div class="p-6 bg-white rounded-lg shadow-lg">
    <!-- Banner -->
    <div class="w-full h-48 bg-cover bg-center rounded-lg mb-4" :style="{ backgroundImage: `url(${bonoData.banner})` }">
    </div>

    <!-- Nombre del Bono -->
    <h2 class="text-2xl font-bold mb-2">{{ bonoData.nombre }}</h2>

    <!-- Información -->
    <p class="text-gray-600 mb-2">
      <strong>Condiciones:</strong> {{ bonoData.contenido.condiciones.info }}
    </p>
    <p class="text-gray-600">
      <strong>Información Final:</strong> {{ bonoData.contenido.final.info }}
    </p>

    <!-- Imágenes -->
    <div class="mt-4 grid grid-cols-2 gap-4">
      <img v-for="(img, index) in bonoData.imagenes" :key="index" :src="img.campo" :alt="img.texto"
        class="w-full h-24 object-cover rounded" />
    </div>
  </div>
</template>
