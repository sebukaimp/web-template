<script lang="ts" setup>

</script>

<template>
  <footer class="bg-gray-800 text-gray-300 py-10">
    <div class="container mx-auto text-center space-y-6">
      <!-- Información sobre la página -->
      <div>
        <h2 class="text-xl font-bold text-gray-100">Bonos App</h2>
        <p class="text-sm max-w-lg mx-auto">
          Descubre y compara los mejores bonos del mercado. Encuentra las opciones que mejor se adapten a tus
          necesidades.
        </p>
      </div>

      <!-- Enlaces útiles -->
      <div>
        <h2 class="text-lg font-bold text-gray-100 mb-3">Enlaces útiles</h2>
        <ul class="flex justify-center space-x-6 text-sm">
          <li>
            <NuxtLink to="/" class="hover:text-blue-400 transition">Inicio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bonos" class="hover:text-blue-400 transition">Bonos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" class="hover:text-blue-400 transition">Preguntas frecuentes</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacto" class="hover:text-blue-400 transition">Contacto</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div>
        <h2 class="text-lg font-bold text-gray-100 mb-3">Síguenos</h2>
        <div class="flex justify-center space-x-6">
          <a href="#" class="hover:text-blue-400 transition">
            <span class="sr-only">Facebook</span>
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="hover:text-blue-400 transition">
            <span class="sr-only">Twitter</span>
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-blue-400 transition">
            <span class="sr-only">Instagram</span>
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-blue-400 transition">
            <span class="sr-only">LinkedIn</span>
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <!-- Derechos reservados -->
      <div class="text-xs text-gray-500">
        © 2024 Bonos App. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
