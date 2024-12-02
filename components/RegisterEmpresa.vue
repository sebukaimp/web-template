<script>
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
  methods: {
    handleSubmit() {
      // Validar contraseñas coincidentes
      if (this.form.password !== this.form.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      // Simulación de registro exitoso
      alert(`¡Registro exitoso para la empresa ${this.form.companyName}!`);
      // Aquí puedes enviar los datos al backend
    },
  },
};
</script>








<template>
  <div class=" m-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center mb-6 text-green-600">Registro de Empresa</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Nombre de la Empresa -->
      <div class="mb-4">
        <label for="companyName" class="block text-gray-700 font-bold mb-2">Nombre de la Empresa</label>
        <input v-model="form.companyName" type="text" id="companyName" placeholder="Introduce el nombre de la empresa"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Dirección -->
      <div class="mb-4">
        <label for="address" class="block text-gray-700 font-bold mb-2">Dirección</label>
        <input v-model="form.address" type="text" id="address" placeholder="Introduce la dirección"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
        <input v-model="form.email" type="email" id="email" placeholder="Introduce el correo de la empresa"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Teléfono -->
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 font-bold mb-2">Teléfono</label>
        <input v-model="form.phone" type="tel" id="phone" placeholder="Introduce el teléfono"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2">Contraseña</label>
        <input v-model="form.password" type="password" id="password" placeholder="Introduce una contraseña"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Confirmar Contraseña -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">Confirmar Contraseña</label>
        <input v-model="form.confirmPassword" type="password" id="confirmPassword" placeholder="Repite la contraseña"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
          required />
      </div>

      <!-- Botón de Registro -->
      <div class="text-center">
        <button type="submit"
          class="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Registrar Empresa
        </button>
      </div>
    </form>
  </div>
</template>
