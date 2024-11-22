<script lang="ts" setup>
const selected = ref(false)
</script>

<template>
  <h1 class="text-center pt-10 text-4xl font-serif">Contacto</h1>
  <div class=" grid grid-cols-2 gap-5 p-10 m-5">
    <!-- <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> -->
    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">Nombre</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Nombre">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">Apellidos</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Apellidos">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">E-mail</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="E-mail">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Direccion">Dirección</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Dirección">
    </div>



    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">Nombre</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Nombre">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">Apellidos</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Apellidos">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Contraseña">E-mail</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="E-mail">
    </div>

    <div class="mb-4">
      <div class=" text-gray-700 text-sm font-bold mb-2" for="Direccion">Dirección</div>
      <input
        class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Contraseña" type="text" placeholder="Dirección">
    </div>

  </div>
  <div class="pl-14">
    <UToggle v-model="selected"></UToggle>Activar
  </div>


  <div class="text-center space-x-20 p-10">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 p-10 rounded " type="button">
      Validar
    </button>


  </div>



</template>

<style></style>