<!-- pages/index.vue -->
<script lang="ts" setup>
const heroContent = {
  title: 'Transform your digital experience',
  subtitle: 'Create stunning interfaces with our modern design system',
  buttonText: 'Get Started',
  buttonLink: '/get-started',
  backgroundImage: 'https://picsum.photos/1920/1080?random=4'
}
</script>

<template>
  <main>
    <!-- Hero Section -->
    <BannerComponents message="Nueva página" type="announcement" :link="{ text: 'Usuarios', url: '/users' }"></BannerComponents>
    <HeroComponent v-bind="heroContent" />
    
    <!-- Sections Grid -->
    <SectionGrid />
  </main>
</template>