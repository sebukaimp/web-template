<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu';

// Accedemos al store
const menuStore = useMenuStore();

// Obtenemos los datos del menú
const leftMenuItems = menuStore.leftMenuItems;
const rightMenuItems = menuStore.rightMenuItems;
const iconItems = menuStore.iconItems;

// Funcionalidad del buscador
const isSearchOpen = computed(() => menuStore.isSearchOpen);
const toggleSearch = menuStore.toggleSearch;
</script>

<template>
  <div class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="container mx-auto flex items-center justify-between px-4 py-4">
      <!-- Logo -->
      <div class="text-xl font-bold">
        <NuxtLink to="/">Logo</NuxtLink>
      </div>

      <!-- Menú izquierdo -->
      <div class="hidden lg:flex space-x-4">
        <NuxtLink v-for="item in leftMenuItems" :key="item.id" :to="item.path"
          class="text-gray-600 hover:text-gray-800 transition-colors">
          {{ item.label }}
        </NuxtLink>
      </div>

      <!-- Botones del menú derecho e iconos -->
      <div class="hidden lg:flex items-center space-x-4">
        <!-- Menú derecho -->
        <NuxtLink v-for="item in rightMenuItems" :key="item.id" :to="item.path"
          class="text-gray-600 hover:text-gray-800 transition-colors">
          {{ item.label }}
        </NuxtLink>

        <!-- Iconos -->
        <NuxtLink v-for="item in iconItems" :key="item.id" :to="item.path"
          class="text-gray-600 hover:text-gray-800 transition-colors" title="item.label">
          <UIcon :name="item.icon" class="w-6 h-6" />
        </NuxtLink>

        <!-- Botón de búsqueda -->
        <button class="text-gray-600 hover:text-gray-800" @click="toggleSearch">
          <i class="i-heroicons-magnifying-glass-20-solid"></i>
        </button>
      </div>
    </nav>

    <!-- Barra de búsqueda móvil -->
    <div v-if="isSearchOpen" class="p-4 lg:hidden">
      <input type="text" placeholder="Buscar..."
        class="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-200" />
    </div>
  </div>
</template>

<style scoped></style>
