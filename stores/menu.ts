import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    leftMenuItems: [
      { id: 1, label: 'Blog', path: '/blog' },
      { id: 2, label: 'Users', path: '/users' },
      { id: 3, label: 'Gestión de Bonos', path: '/gestion-bonos' },
    ],
    rightMenuItems: [
      { id: 5, label: 'Registro Usuarios', path: '/register-user' },
      { id: 6, label: 'Registro Empresas', path: '/register-empresa' },
    ],
    iconItems: [
      { id: 8, label: 'Profile', path: '/profile', icon: 'uiw:user' },
      { id: 9, label: 'Favorites', path: '/favorites', icon: 'uiw:heart-off' },
      { id: 10, label: 'Cart', path: '/cart', icon: 'gala:bag' },
    ],
    isSearchOpen: false,
  }),
  actions: {
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
  },
});

