<script lang="ts" setup>


</script>


<template>
  <!-- HERO IMAGEN -->

  <div class="bg-no-repeat bg-bottom: bottom-full h-96"
    style="background-image: url('https://picsum.photos/1920/1080?random=4');">
    <div class="p-20">
      <h1 class="text-6xl text-white">Lorem ipsum dolor sit </h1>
      <h1 class="text-6xl text-white">amet consectetur adipisicing elit.</h1>
      <h3 class="text-white mt-10">Lorem, ipsum dolor.</h3>
      <div class="p-3 flex justify-center">
        <UButton class="bg-gray-100 rounded-full text-black " size="xl">Botón</UButton>
      </div>
    </div>
  </div>

  <!-- SECCIONES -->

  <div class="font-extrabold text-2xl m-10">Secciones</div>
  <div class="grid grid-cols-2 m-5 h-56">
    <div class=" bg-gradient-to-r from-violet-500 mx-10 font-serif  pl-5 rounded-lg text-white pt-40  font-extralight">
      Lorem
      ipsum,dolor sit
      <div class="font-bold">Lorem ipsum dolor ametconsectetur adipisicing elit. SECCION1</div>
    </div>
    <div class="bg-gradient-to-r from-pink-500 mx-10 p font-serif rounded-lg pl-5 text-white pt-40 font-extralight">
      Lorem
      ipsum,
      <div class="font-bold">Lorem ipsum dolor dolors itamet consectetur adipisicing elit. SECCION"</div>
    </div>
  </div>
  <!-- BOTON INFORMACION -->
  <div class="p-6">
    <UButton class="flex justify-self-center pr-5 bg-zinc-400 rounded-2xl ">+INFO</UButton>
  </div>
</template>

<style></style>