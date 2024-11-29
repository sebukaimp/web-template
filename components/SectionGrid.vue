<!-- components/SectionsGrid.vue -->
<script lang="ts" setup>
interface Section {
  id: number
  title: string
  description: string
  gradient: string
}

const sections: Section[] = [
  {
    id: 1,
    title: 'Section One',
    description: 'Lorem ipsum dolor amet consectetur adipisicing elit.',
    gradient: 'from-primary-500 to-primary-700'
  },
  {
    id: 2,
    title: 'Section Two',
    description: 'Lorem ipsum dolor dolors itamet consectetur adipisicing elit.',
    gradient: 'from-pink-500 to-pink-700'
  }
]
</script>

<template>
  <section class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 class="mb-10 font-bold text-heading-large text-content-primary">
      Sections
    </h2>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <SectionCard
        v-for="section in sections"
        :key="section.id"
        v-bind="section"
      />
    </div>

    <div class="flex justify-center mt-12">
      <UButton
        size="lg"
        color="gray"
        variant="solid"
        class="px-8 rounded-xl"
        icon="i-heroicons-plus-20-solid"
      >
        More Info
      </UButton>
    </div>
  </section>
</template>