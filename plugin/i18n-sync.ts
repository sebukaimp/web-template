import { defineNuxtPlugin } from '#app';
import { useI18n } from 'vue-i18n';
import { useLocalStorageStore } from '~/stores/localstorage';

export default defineNuxtPlugin(() => {
    const localStorageStore = useLocalStorageStore();
    const { locale } = useI18n();

    // Establece el idioma al iniciar la aplicación
    locale.value = localStorageStore.getLocale();

    // Observa los cambios en el idioma del store y sincroniza
    localStorageStore.$subscribe((mutation, state: { locale: 'es' | 'en' | 'fr' }) => {
        locale.value = state.locale;
    });
});
