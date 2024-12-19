<script lang="ts" setup>

</script>

<template>
  <div>
    <!-- Versión de escritorio -->
    <div class="absolute right-0 z-30 items-center hidden px-5 mt-1 text-right md:flex lg:px-2">
      <a href="/es/admin"
        class="px-2 mr-2 text-sm font-semibold underline hover:text-color-hover-dark text-color-texto">
        Acceso a establecimientos
      </a>
    </div>
    <!-- Versión móvil -->
    <div class="absolute right-0 z-30 flex items-center justify-between w-full px-5 mt-1 md:hidden lg:pr-2">
      <a href="/es/admin" class="mr-4 text-base text-color-texto hover:text-color-accent">
        Acceso a establecimientos
      </a>
    </div>
  </div>
</template>
