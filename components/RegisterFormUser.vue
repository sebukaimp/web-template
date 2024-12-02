<script lang="ts" setup>

</script>
<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-10">
    <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">Registro de Usuario</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Nombre -->
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Nombre</label>
        <input v-model="form.name" type="text" id="name" placeholder="Introduce tu nombre"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
        <input v-model="form.email" type="email" id="email" placeholder="Introduce tu correo"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2">Contraseña</label>
        <input v-model="form.password" type="password" id="password" placeholder="Introduce tu contraseña"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Confirmar Contraseña -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">Confirmar Contraseña</label>
        <input v-model="form.confirmPassword" type="password" id="confirmPassword" placeholder="Repite tu contraseña"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Botón de Registro -->
      <div class="text-center">
        <button type="submit"
          class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Validar que las contraseñas coincidan
      if (this.form.password !== this.form.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      // Enviar datos al servidor (simulación por ahora)
      alert("Registro exitoso. Bienvenido, " + this.form.name + "!");

    },
  },
};
</script>

<style scoped></style>
