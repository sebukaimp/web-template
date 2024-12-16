<script>
import { useI18n } from 'vue-i18n';

export default {
  name: "RegisterCompanyForm",
  data() {
    return {
      form: {
        companyName: "",
        address: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    handleSubmit() {
      // Validar contraseñas coincidentes
      if (this.form.password !== this.form.confirmPassword) {
        alert(this.t("contrasenasNoCoinciden"));
        return;
      }
      // Simulación de registro exitoso
      alert(this.t("registroExitoso", { empresa: this.form.companyName }));
      // Aquí puedes enviar los datos al backend
    },
  },
};
</script>

<template>
  <div class="m-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center mb-6 text-green-600">{{ t("registroEmpresa") }}</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Nombre de la Empresa -->
      <div class="mb-4">
        <label for="companyName" class="block text-gray-700 font-bold mb-2">{{ t("nombreEmpresa") }}</label>
        <input v-model="form.companyName" type="text" id="companyName" :placeholder="t('nombreEmpresa')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Dirección -->
      <div class="mb-4">
        <label for="address" class="block text-gray-700 font-bold mb-2">{{ t("direccion") }}</label>
        <input v-model="form.address" type="text" id="address" :placeholder="t('direccion')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">{{ t("correo") }}</label>
        <input v-model="form.email" type="email" id="email" :placeholder="t('correo')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Teléfono -->
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 font-bold mb-2">{{ t("telefono") }}</label>
        <input v-model="form.phone" type="tel" id="phone" :placeholder="t('telefono')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2">{{ t("contrasena") }}</label>
        <input v-model="form.password" type="password" id="password" :placeholder="t('contrasena')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Confirmar Contraseña -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">{{ t("confirmarContrasena") }}</label>
        <input v-model="form.confirmPassword" type="password" id="confirmPassword"
          :placeholder="t('confirmarContrasena')"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Botón de Registro -->
      <div class="text-center">
        <button type="submit"
          class="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition">
          {{ t("registrarEmpresa") }}
        </button>
      </div>
    </form>
  </div>
</template>
