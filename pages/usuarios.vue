<script lang="ts" setup>
</script>

<template>
  <div class="p-10 bg-gray-100 min-h-screen">
    <!-- Sección principal con imagen y contenido -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
      <!-- Imagen -->
      <div class="h-96 bg-blue-100 rounded-xl flex items-center justify-center">
        <span class="text-blue-500 text-lg font-semibold">Imagen Aquí</span>
      </div>
      <!-- Contenido -->
      <div class="flex flex-col justify-center">
        <h1 class="text-center font-serif text-4xl mb-6 text-blue-700">Usuarios</h1>
        <p class="text-justify px-4 mb-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque itaque, obcaecati velit,
          similique nam alias quos sequi hic aliquid enim accusantium. Quod possimus itaque, similique voluptates
          exercitationem neque numquam.
        </p>
        <div class="flex justify-center space-x-4">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded shadow-md transform hover:scale-105 transition">
            Botón 1
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded shadow-md transform hover:scale-105 transition">
            Botón 2
          </button>
        </div>
      </div>
    </div>

    <!-- Sección adicional -->
    <div class="text-center mt-12">
      <h3 class="text-2xl font-serif text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem quod
        cumque dicta accusamus aperiam quam ea culpa voluptatibus dolores corrupti
        impedit magni, excepturi praesentium ipsa doloremque quaerat dignissimos vel?
      </h3>
    </div>
  </div>
</template>

<style>
/* Botones con animaciones suaves */
button {
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
