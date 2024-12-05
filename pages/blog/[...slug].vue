<script>



</script>


<template>
  <!-- Contenido Principal -->
  <main class="p-10 flex justify-center bg-gray-100 min-h-screen">
    <div class="text-center max-w-3xl">
      <div class="prose prose-lg mx-auto text-gray-800">
        <ContentDoc />
      </div>
    </div>
  </main>

  <!-- Botón de Regreso -->
  <div class="text-center bg-slate-300 py-10 shadow-md">
    <UButton to="/blog" color="black"
      class="px-6 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition-all">
      Back
    </UButton>
  </div>
</template>

<style></style>
