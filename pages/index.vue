<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from '#i18n'

const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})



const heroContent = {
  title: 'Transform your digital experience',
  subtitle: 'Create stunning interfaces with our modern design system',
  buttonText: 'Get Started',
  buttonLink: '/get-started',
  backgroundImage: 'https://picsum.photos/1920/1080?random=4'
}



</script>
<template>

  <div>
    <div class="w-full max-w-6xl mx-auto">
      <ul class="flex space-x-4 justify-end">
        <li v-for="l in availableLocales" :key="l.code">
          <nuxt-link :to="switchLocalePath(l.code)">
            {{ t(l.name) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- Hero Section -->
    <BannerComponents :message="t('hero.title')" type="announcement" :link="{ text: t('about'), url: '/users' }" />
    <HeroComponent v-bind="heroContent" />
    <SectionGrid />
  </div>

</template>
