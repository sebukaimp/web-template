<script lang="ts" setup>
import { useBonosStore } from '~/stores/useBonos'
const bonosStore = useBonosStore()


</script>
<template>
  <div>
    <!-- Imagen para escritorio -->
    <div class="hidden flex-col justify-start mt-20 md:flex">
      <img :src="bonosStore.bonoData?.banner" alt="banner"
        class="mb-10" />
    </div>
    <!-- Imagen para móvil -->
    <div class="flex flex-col justify-start mt-20 md:hidden">
      <img :src="bonosStore.bonoData?.banner" alt="banner"
        class="w-full" />
    </div>
  </div>
</template>
