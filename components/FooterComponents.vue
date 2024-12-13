<script lang="ts" setup>
import { useI18n } from '#i18n'
const { t } = useI18n()


</script>

<template>
  <footer class="bg-gray-800 text-gray-300 py-10">
    <div class="container mx-auto text-center space-y-6">
      <!-- Información sobre la página -->
      <div>
        <h2 class="text-xl font-bold text-gray-100">{{ t('Bonos App') }}</h2>
        <p class="text-sm max-w-lg mx-auto">
          {{ t('texto01') }}
        </p>
      </div>

      <!-- Enlaces útiles -->
      <div>
        <h2 class="text-lg font-bold text-gray-100 mb-3">{{ t('enlaces utiles') }}</h2>
        <ul class="flex justify-center space-x-6 text-sm">
          <li>
            <NuxtLink to="/" class="hover:text-blue-400 transition">{{ t('Inicio') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bonos" class="hover:text-blue-400 transition">{{ t('Bonos') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" class="hover:text-blue-400 transition">{{ t('faq') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacto" class="hover:text-blue-400 transition">{{ t('contacto') }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div>
        <h2 class="text-lg font-bold text-gray-100 mb-3">{{ t('Siguenos') }}</h2>
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
        © 2024 Bonos App. {{ t('rights_reserved') }}
      </div>
    </div>
  </footer>
</template>
