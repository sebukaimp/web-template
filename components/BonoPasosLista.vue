<script setup>
const steps = [
  {
    id: 1,
    number: "01",
    title: "Consulta los establecimientos adheridos",
    description: "Revisa el listado de establecimientos donde puedes canjear tus bonos.",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    number: "02",
    title: "Tipos de bonos",
    description: "Consigue hasta 100€ por DNI/NIE.",
    bgColor: "bg-green-600",
  },
  {
    id: 3,
    number: "03",
    title: "¡Disfruta!",
    description: "Podrás canjear tus bonos en cualquier establecimiento que se haya adherido al programa.",
    bgColor: "bg-red-600",
  },
];
</script>

<template>
  <div class="bg-gray-100 py-10">
    <ul class="grid gap-8 md:grid-cols-3 justify-items-center max-w-screen-xl mx-auto">
      <li v-for="step in steps" :key="step.id"
        class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <!-- Círculo con el número -->
        <div :class="step.bgColor" class="flex items-center justify-center h-16 w-16 rounded-full text-white mb-4">
          <div class="text-2xl font-bold">{{ step.number }}</div>
        </div>

        <!-- Título -->
        <h5 class="text-xl font-semibold text-gray-800 mb-2">{{ step.title }}</h5>

        <!-- Descripción -->
        <p class="text-gray-600">{{ step.description }}</p>
      </li>
    </ul>
  </div>
</template>
