<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const currentNavigation = computed(() => {
  return navigation.value ? navigation.value[0].children : []
})
</script>

<template>


  <div class=" m-10 bg-slate-100 justify-items-center rounded-full">
    <main class=" p-10 ">
      <ContentDoc class="prose" path="/blog" />
    </main>
  </div>

  <div class="p-10 grid-cols-6 font-mono text-2xl">
    <div v-if="navigation">
      <nuxt-link :to="item._path" v-for="item in currentNavigation">
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>

</template>


<style></style>