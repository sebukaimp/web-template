import { defineStore } from 'pinia';

export const useLocalStorageStore = defineStore('localstorage', {
  state: () => ({
    locale: (localStorage.getItem('selectedLocale') || 'es') as 'es' | 'en' | 'fr'
  }),
  actions: {
    setLocale(lang: 'es' | 'en' | 'fr') {
      this.locale = lang;
      localStorage.setItem('selectedLocale', lang);
    },
    getLocale() {
      return this.locale;
    }
  }
});
