import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const leftMenuItems = ref([
    { id: 1, label: 'Blog', path: '/blog' },
    { id: 2, label: 'Users', path: '/users' },
    { id: 3, label: 'Gestión de Bonos', path: '/gestion-bonos' },
  ]);

  const rightMenuItems = ref([
    { id: 5, label: 'Registro Usuarios', path: '/register-user' },
    { id: 6, label: 'Registro Empresas', path: '/register-empresa' },
  ]);

  const iconItems = ref([
    { id: 8, label: 'Profile', path: '/profile', icon: 'uiw:user' },
    { id: 9, label: 'Favorites', path: '/favorites', icon: 'uiw:heart-off' },
    { id: 10, label: 'Cart', path: '/cart', icon: 'gala:bag' },
  ]);

  const mobileMenuItems = computed(() => [
    ...leftMenuItems.value.map((item) => ({
      label: item.label,
      icon: 'i-heroicons-chevron-right-20-solid',
      to: item.path,
    })),
    ...rightMenuItems.value.map((item) => ({
      label: item.label,
      icon: 'i-heroicons-chevron-right-20-solid',
      to: item.path,
    })),
    ...iconItems.value.map((item) => ({
      label: item.label,
      icon: item.icon,
      to: item.path,
    })),
  ]);

  const isSearchOpen = ref(false);
  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
  };

  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === 'dark');
  const toggleDarkMode = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark';
  };

  return {
    leftMenuItems,
    rightMenuItems,
    iconItems,
    mobileMenuItems,
    isSearchOpen,
    toggleSearch,
    isDark,
    toggleDarkMode,
  };
});

