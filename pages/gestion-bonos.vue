<template>
  <div class="container mx-auto py-6">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Gestión de Bonos</h1>

    <!-- Filtros -->
    <div class="mb-6">
      <input type="text" v-model="search" placeholder="Buscar bono..." class="border rounded-lg p-2 w-full" />
    </div>

    <!-- Tabla de Bonos -->
    <table class="w-full border-collapse bg-white shadow-md rounded-lg">
      <thead class="bg-blue-100">
        <tr>
          <th class="border p-4">Nombre</th>
          <th class="border p-4">Descripción</th>
          <th class="border p-4">Fecha Expiración</th>
          <th class="border p-4">Estado</th>
          <th class="border p-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bono in filteredBonos" :key="bono.id" class="text-center">
          <td class="border p-4">{{ bono.nombre }}</td>
          <td class="border p-4">{{ bono.descripcion }}</td>
          <td class="border p-4">{{ bono.fechaExpiracion }}</td>
          <td class="border p-4">{{ bono.estado }}</td>
          <td class="border p-4">
            <button class="bg-blue-600 text-white py-1 px-2 rounded">Editar</button>
            <button class="bg-red-600 text-white py-1 px-2 rounded ml-2">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      bonos: [
        { id: 1, nombre: "Bono A", descripcion: "Descuento 10%", fechaExpiracion: "2024-12-31", estado: "Activo" },
        { id: 2, nombre: "Bono B", descripcion: "Descuento 20%", fechaExpiracion: "2024-06-30", estado: "Inactivo" },
        // Más bonos aquí...
      ],
    };
  },
  computed: {
    filteredBonos() {
      return this.bonos.filter(bono =>
        bono.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
