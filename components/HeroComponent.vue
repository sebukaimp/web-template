<script lang="ts" setup>
interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
}


const props = withDefaults(defineProps<HeroProps>(), {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem, ipsum dolor.',
  buttonText: 'Get Started',
  buttonLink: '#',
  backgroundImage: 'https://picsum.photos/1920/1080?random=4'
})


</script>

<template>
  <!-- Hero Section -->
  <section class="relative h-[32rem] bg-cover bg-center bg-no-repeat overflow-hidden"
    :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-content-primary/40 dark:bg-content-primary/60" />

    <!-- Content Container -->
    <div class="relative h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col justify-center h-full py-20 space-y-8">
        <!-- Hero Text -->
        <div class="max-w-3xl">
          <h1 class="mb-4 font-bold tracking-tight text-display-large text-surface-primary" v-text="title" />
          <p class="text-heading-medium text-surface-primary/90" v-text="subtitle" />
        </div>

        <!-- Hero Button -->
        <div>
          <UButton :to="buttonLink" size="xl" color="white" variant="solid" class="px-8 rounded-full">
            {{ buttonText }}
            <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-2" />
          </UButton>
        </div>
      </div>
    </div>
  </section>
  <div class="py-10 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Llamadas a la acción</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> -->
      <!-- Generar las secciones dinámicamente
        <div v-for="(section, index) in sections" :key="index"
          :class="`p-6 rounded-lg shadow-md bg-gradient-to-r ${section.gradient} text-white`">
          <NuxtLink :to="section.link" class="block">
            <h3 class="text-xl font-semibold mb-2">{{ section.title }}</h3>
            <p class="text-sm">{{ section.description }}</p>
          </NuxtLink>
        </div> -->
      <!-- </div> -->
    </div>
  </div>

</template>

<style scoped>
/* Optional: Add a subtle text shadow to hero text for better readability */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}

/* Animación al pasar el ratón */
.shadow-md {
  transition: transform 0.2s, box-shadow 0.2s;
}

.shadow-md:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>