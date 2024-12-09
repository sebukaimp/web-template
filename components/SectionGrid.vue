<template>
  <div class="py-10 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">¿Quién eres?</h2>

      <!-- Contenedor de tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- Tarjetas -->
        <div v-for="(section, index) in sections" :key="index"
          class="p-6 rounded-xl shadow-lg flex flex-col items-center bg-gradient-to-r" :class="section.gradient">
          <!-- Imagen -->
          <div
            class="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white -mt-10 mb-4">
            <img :src="section.image" alt="Imagen de la sección" class="w-20 h-20 object-cover rounded-full" />
          </div>

          <!-- Contenido -->
          <div class="text-center text-white">
            <NuxtLink :to="section.link" class="block">
              <h3 class="text-2xl font-bold mb-2">{{ section.title }}</h3>
              <p class="text-sm">{{ section.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    link: "/establecimientos",
    image: "https://via.placeholder.com/150/47b900/FFFFFF?text=Establecimiento", // Imagen verde
  },
  {
    title: "Soy cliente/usuario",
    description: "Encuentra establecimientos que ofrecen lo que necesitas.",
    gradient: "from-blue-500 to-blue-700",
    link: "/usuarios",
    image: "https://via.placeholder.com/150/1D5CDB/FFFFFF?text=Cliente", // Imagen de muestra                   ", // Imagen azul
  },
];
</script>

<style scoped>
/* Transiciones y sombras */
.shadow-lg {
  transition: transform 0.3s, box-shadow 0.3s;
}

.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Ajuste de márgenes para las tarjetas */
.card-image {
  position: relative;
  top: -40px;
}
</style>
