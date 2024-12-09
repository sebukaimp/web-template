<script lang="ts" setup>
</script>

<template>
  <div class="p-10 bg-gradient-to-r from-yellow-50 via-green-50 to-yellow-100 min-h-screen">
    <!-- Sección principal con imagen y contenido -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-10 rounded-3xl shadow-xl">
      <!-- Imagen -->
      <div
        class="h-96 bg-gradient-to-br from-green-400 to-yellow-400 rounded-3xl flex items-center justify-center shadow-lg">
        <span class="text-white text-2xl font-semibold tracking-wider drop-shadow-lg">Imagen de Establecimientos</span>
      </div>
      <!-- Contenido -->
      <div class="flex flex-col justify-center">
        <h1 class="text-center font-serif text-5xl mb-6 text-green-700 drop-shadow-md">
          Establecimientos
        </h1>
        <p class="text-justify px-6 mb-6 text-gray-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque risus. Sed vel dui dignissim,
          tempor ipsum eget, fringilla ligula. Nulla facilisi. Fusce auctor varius ligula, ac fermentum nisl laoreet
          sed.
        </p>
        <div class="flex justify-center space-x-6">
          <button
            class="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-yellow-500 hover:to-green-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition">
            Ver Detalles
          </button>
          <button
            class="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-green-500 hover:to-yellow-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition">
            Más Opciones
          </button>
        </div>
      </div>
    </div>

    <!-- Sección adicional -->
    <div class="text-center mt-16">
      <h3 class="text-3xl font-serif text-gray-800 leading-relaxed">
        Explore nuestros establecimientos y descubra cómo mejoramos su experiencia. Comprometidos con la calidad y
        el servicio, trabajamos para ofrecerle siempre lo mejor.
      </h3>
    </div>
  </div>
</template>

<style>
/* Estilos generales */
button {
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}
</style>
