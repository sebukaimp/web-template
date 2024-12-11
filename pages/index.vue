<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from '#i18n'
const { t } = useI18n()

const heroContent = {
  title: 'Transform your digital experience',
  subtitle: 'Create stunning interfaces with our modern design system',
  buttonText: 'Get Started',
  buttonLink: '/get-started',
  backgroundImage: 'https://picsum.photos/1920/1080?random=4'
}


const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})

</script>
<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <div>
      <!-- Conmutador de idioma -->
      <span>Idioma actual: {{ locale }}</span>
      <ul>
        <li v-for="l in availableLocales" :key="l.code">
          <nuxt-link :to="switchLocalePath(l.code)">
            {{ l.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <p>{{ $t('about') }}</p>

    <main>
      <!-- Hero Section -->
      <BannerComponents :message="$t('hero.title')" type="announcement" :link="{ text: $t('about'), url: '/users' }" />
    </main>
    <HeroComponent v-bind="heroContent" />
    <SectionGrid />
  </div>

</template>
