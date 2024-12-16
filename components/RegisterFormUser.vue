<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

function handleSubmit() {
  // Validar que las contraseñas coincidan
  if (form.value.password !== form.value.confirmPassword) {
    alert(t("contrasenasNoCoinciden"));
    return;
  }
  // Simulación de registro exitoso
  alert(t("registroExitoso", { nombre: form.value.name }));
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-10">
    <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">{{ t("registroUsuario") }}</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Nombre -->
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">{{ t("nombre") }}</label>
        <input v-model="form.name" type="text" id="name" :placeholder="t('nombre')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">{{ t("correo") }}</label>
        <input v-model="form.email" type="email" id="email" :placeholder="t('correo')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2">{{ t("contrasena") }}</label>
        <input v-model="form.password" type="password" id="password" :placeholder="t('contrasena')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Confirmar Contraseña -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">{{ t("confirmarContrasena") }}</label>
        <input v-model="form.confirmPassword" type="password" id="confirmPassword"
          :placeholder="t('confirmarContrasena')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required />
      </div>

      <!-- Botón de Registro -->
      <div class="text-center">
        <button type="submit"
          class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          {{ t("registrarse") }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
