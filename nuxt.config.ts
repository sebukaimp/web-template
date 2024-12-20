// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css", "@/assets/css/global.css"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/i18n',

  ],
  i18n: {
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix',
    // locales: [
    //   { code: 'en', name: 'English', file: 'en.json' },
    //   { code: 'ca', name: 'Català', file: 'ca.json' },
    //   { code: 'eu', name: 'Euskara', file: 'eu.json' },
    //   { code: 'es', name: 'Español', file: 'es.json' },
    //   { code: 'fr', name: 'Français', file: 'fr.json' }
    // ],
     vueI18n: './i18n.config.ts'
  }
})