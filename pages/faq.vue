<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="grid grid-cols-2">
    <!-- Títulos -->
    <h1 class="text-center font-serif text-4xl pt-10">{{ t('usuarios') }}</h1>
    <h1 class="text-center font-serif text-4xl pt-10">{{ t('establecimientos') }}</h1>

    <!-- Bloques de preguntas -->
    <div class="bg-slate-500 m-10 font-serif rounded-2xl text-center text-white" v-for="i in 6" :key="i">
      {{ t('pregunta') }}
      <div class="bg-violet-100 rounded-lg h-20 py-1 text-black">
        {{ t('descripcion') }}
      </div>
    </div>
  </div>
</template>

<style></style>
