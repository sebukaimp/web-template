<script lang="ts" setup>
interface Section {
  title: string;
  description: string;
  gradient: string;
  link: string;
  image: string;
}

const sections: Section[] = [
  {
    title: "Soy establecimiento",
    description: "Regístrate y comienza a ofrecer tus servicios a más clientes.",
    gradient: "from-green-500 to-green-700",
    link: "/seccion1", // Ruta de la página de la sección 1
    image: "https://via.placeholder.com/150/47b900/FFFFFF?text=Establecimiento", // Imagen de muestra
  },
  {
    title: "Soy cliente/usuario",
    description: "Encuentra establecimientos que ofrecen lo que necesitas.",
    gradient: "from-pink-500 to-pink-700",
    link: "/seccion2", // Ruta de la página de la sección 2
    image: "https://via.placeholder.com/150/db1d5c/FFFFFF?text=Cliente", // Imagen de muestra
  },
];
</script>

<template>
  <div class="py-10 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Llamadas a la acción</h2>

      <!-- Contenedor de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- Tarjetas -->
        <div v-for="(section, index) in sections" :key="index"
          :class="`p-8 rounded-lg shadow-lg bg-gradient-to-r ${section.gradient} text-white`"
          class="flex flex-col items-center">
          <!-- Imagen -->
          <img :src="section.image" alt="Imagen de la sección"
            class="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4" />

          <!-- Contenido -->
          <div class="text-center">
            <NuxtLink :to="section.link" class="block">
              <h3 class="text-2xl font-semibold mb-2">{{ section.title }}</h3>
              <p class="text-sm">{{ section.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animación al pasar el ratón */
.shadow-lg {
  transition: transform 0.3s, box-shadow 0.3s;
}

.shadow-lg:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}
</style>
