<script lang="ts" setup>
</script>

<template>
  <div class="p-10 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen">
    <!-- Sección principal con imagen y contenido -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-10 rounded-3xl shadow-xl">
      <!-- Imagen -->
      <div
        class="h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg">
        <span class="text-white text-2xl font-semibold tracking-wider drop-shadow-lg">Imagen de Usuarios</span>
      </div>
      <!-- Contenido -->
      <div class="flex flex-col justify-center">
        <h1 class="text-center font-serif text-5xl mb-6 text-blue-700 drop-shadow-md">
          Usuarios
        </h1>
        <p class="text-justify px-6 mb-6 text-gray-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque risus. Sed vel dui dignissim,
          tempor ipsum eget, fringilla ligula. Nulla facilisi. Fusce auctor varius ligula, ac fermentum nisl laoreet
          sed.
        </p>
        <div class="flex justify-center space-x-6">
          <button
            class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition">
            Ver Detalles
          </button>
          <button
            class="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition">
            Más Opciones
          </button>
        </div>
      </div>
    </div>

    <!-- Sección adicional -->
    <div class="text-center mt-16">
      <h3 class="text-3xl font-serif text-gray-800 leading-relaxed">
        Explore nuestros usuarios y descubra cómo mejoramos su experiencia. Comprometidos con la calidad y
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
