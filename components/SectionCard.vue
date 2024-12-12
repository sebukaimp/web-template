<!-- components/SectionCard.vue -->
<script lang="ts" setup>

interface SectionProps {
  title: string
  description: string
  gradient: string
}

defineProps<SectionProps>()
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl transition-transform hover:scale-[1.02] duration-300">
    <div :class="[
      'bg-gradient-to-br',
      gradient,
      'p-8 h-64 flex flex-col justify-end'
    ]">
      <div class="text-surface-primary">
        <p class="mb-2 font-light text-body-large">
          {{ description }}
        </p>
        <h3 class="font-bold text-heading-medium">
          {{ title }}
        </h3>
      </div>
    </div>
  </div>
</template>