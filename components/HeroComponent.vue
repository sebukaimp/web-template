<script lang="ts" setup>
interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
}

interface Section {
  title: string
  description: string
  gradient: string
}

const props = withDefaults(defineProps<HeroProps>(), {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Lorem, ipsum dolor.',
  buttonText: 'Get Started',
  buttonLink: '#',
  backgroundImage: 'https://picsum.photos/1920/1080?random=4'
})

const sections: Section[] = [
  {
    title: 'Section One',
    description: 'Lorem ipsum dolor amet consectetur adipisicing elit.',
    gradient: 'from-primary-500 to-primary-700'
  },
  {
    title: 'Section Two',
    description: 'Lorem ipsum dolor dolors itamet consectetur adipisicing elit.',
    gradient: 'from-pink-500 to-pink-700'
  }
]
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-[32rem] bg-cover bg-center bg-no-repeat overflow-hidden"
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-content-primary/40 dark:bg-content-primary/60" />

    <!-- Content Container -->
    <div class="relative h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col justify-center h-full py-20 space-y-8">
        <!-- Hero Text -->
        <div class="max-w-3xl">
          <h1 
            class="mb-4 font-bold tracking-tight text-display-large text-surface-primary"
            v-text="title"
          />
          <p 
            class="text-heading-medium text-surface-primary/90"
            v-text="subtitle"
          />
        </div>

        <!-- Hero Button -->
        <div>
          <UButton
            :to="buttonLink"
            size="xl"
            color="white"
            variant="solid"
            class="px-8 rounded-full"
          >
            {{ buttonText }}
            <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-2" />
          </UButton>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
/* Optional: Add a subtle text shadow to hero text for better readability */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>