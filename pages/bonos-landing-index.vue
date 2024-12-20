<script setup>
import BonoHeader from '@/components/BonoHeader.vue';
import BonoBanner from '@/components/BonoBanner.vue';
import BonoDescription from '@/components/BonoDescription.vue';
import BonoActionButtons from '@/components/BonoActionButtons.vue';
import BonoPasosLista from '@/components/BonoPasosLista.vue';
</script>




<template>
  <div class="w-full mx-auto max-w-7xl">
    <BonoHeader />
    <div class="mx-auto home child-view">
      <BonoBanner />
      <BonoDescription />
      <BonoActionButtons />
      <BonoPasosLista />
    </div>
  </div>
</template>
