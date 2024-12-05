<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const currentNavigation = computed(() => {
  return navigation.value ? navigation.value[0].children : []
})
</script>
<template>
  <!-- Contenedor Principal del Blog -->
  <div class="m-5 bg-slate-100 rounded-lg shadow-md">
    <main class="p-10">
      <ContentDoc class="prose" path="/blog" />
    </main>
  </div>

  <!-- Navegación de las publicaciones -->
  <div class="p-10 flex justify-center">
    <div v-if="navigation" class="p-6 bg-white rounded-lg shadow-lg w-full max-w-3xl">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Lista de Publicaciones</h2>
      <ol class="list-decimal list-inside space-y-4">
        <li v-for="item in currentNavigation" :key="item._path"
          class="text-lg text-blue-600 hover:text-blue-800 font-medium">
          <nuxt-link :to="item._path">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ol>
    </div>
  </div>
</template>
