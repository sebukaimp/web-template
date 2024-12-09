// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css", "@/assets/css/global.css"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-mapbox',
    '@nuxt/content',
    '@nuxtjs/fontaine'
  ],




})