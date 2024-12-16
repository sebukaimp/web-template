<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const selected = ref(false);
</script>

<template>
  <h1 class="text-center pt-10 text-4xl font-serif">{{ t('contacto1') }}</h1>

  <div class="grid grid-cols-2 gap-5 p-10 m-5">
    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2" for="nombre">{{ t('nombre') }}</label>
      <input
        class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="nombre" type="text" :placeholder="t('nombre')">
    </div>

    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2" for="apellidos">{{ t('apellidos') }}</label>
      <input
        class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="apellidos" type="text" :placeholder="t('apellidos')">
    </div>

    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2" for="email">{{ t('email1') }}</label>
      <input
        class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email" type="email" :placeholder="t('email')">
    </div>

    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2" for="direccion">{{ t('direccion1') }}</label>
      <input
        class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="direccion" type="text" :placeholder="t('direccion')">
    </div>
  </div>

  <div class="pl-14">
    <UToggle v-model="selected"></UToggle>{{ t('activar') }}
  </div>

  <div class="text-center space-x-20 p-10">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 p-10 rounded" type="button">
      {{ t('validar') }}
    </button>
  </div>
</template>

<style scoped></style>
