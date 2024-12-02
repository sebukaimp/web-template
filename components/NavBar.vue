<script lang="ts" setup>
interface MenuItem {
  id: number;
  label: string;
  path: string;
  icon?: string;
}

const leftMenuItems: MenuItem[] = [
  { id: 1, label: 'Blog', path: '/blog' },
  { id: 2, label: 'Users', path: '/users' },
  { id: 3, label: 'Layouts', path: '/layouts' },
];

const rightMenuItems: MenuItem[] = [
  { id: 5, label: 'Registro Usuarios', path: '/register-user' },
  { id: 6, label: 'Registro Empresas', path: '/register-empresa' },
];

const iconItems: MenuItem[] = [
  { id: 8, label: 'Profile', path: '/profile', icon: 'uiw:user' },
  { id: 9, label: 'Favorites', path: '/favorites', icon: 'uiw:heart-off' },
  { id: 10, label: 'Cart', path: '/cart', icon: 'gala:bag' }
];

// Mobile menu items for UDropdown
const mobileMenuItems = [
  [{
    label: 'Navigation',
    disabled: true,
  }],
  leftMenuItems.map(item => ({
    label: item.label,
    icon: 'i-heroicons-chevron-right-20-solid',
    to: item.path
  })),
  rightMenuItems.map(item => ({
    label: item.label,
    icon: 'i-heroicons-chevron-right-20-solid',
    to: item.path
  })),
  iconItems.map(item => ({
    label: item.label,
    icon: item.icon,
    to: item.path
  }))
];

const isSearchOpen = ref(false);
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

// Dark mode toggle
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');
const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark';
};
</script>

<template>
  <div class="sticky top-0 z-50 border-b bg-surface-primary/80 backdrop-blur-sm border-surface-tertiary/50">
    <nav class="mx-auto max-w-7xl">
      <div class="flex items-center justify-between px-4 py-4 lg:px-8">
        <!-- Logo -->
        <LogoComponents class="flex-shrink-0" />

        <!-- Desktop Menu - Left -->
        <div class="hidden space-x-8 lg:flex">
          <NuxtLink v-for="item in leftMenuItems" :key="item.id" :to="item.path"
            class="transition-colors text-label-large text-content-secondary hover:text-content-primary">
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Search Bar - Desktop -->
        <div class="flex-1 hidden max-w-xs mx-8 lg:block">
          <USelect icon="i-heroicons-magnifying-glass-20-solid" color="gray" size="sm" placeholder="Search..."
            class="bg-surface-secondary" />
        </div>

        <!-- Desktop Menu - Right -->
        <div class="items-center hidden space-x-8 lg:flex">
          <NuxtLink v-for="item in rightMenuItems" :key="item.id" :to="item.path"
            class="transition-colors text-label-large text-content-secondary hover:text-content-primary">
            {{ item.label }}
          </NuxtLink>

          <!-- Icons -->
          <NuxtLink v-for="item in iconItems" :key="item.id" :to="item.path"
            class="transition-colors text-content-secondary hover:text-content-primary" :title="item.label">
            <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <UButton color="gray" variant="ghost"
            :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" @click="toggleDarkMode" />
        </div>

        <!-- Mobile Navigation -->
        <div class="flex items-center space-x-4 lg:hidden">
          <!-- Mobile Search Toggle -->
          <UButton color="gray" variant="ghost" icon="i-heroicons-magnifying-glass-20-solid" @click="toggleSearch" />

          <!-- Dark Mode Toggle - Mobile -->
          <UButton color="gray" variant="ghost"
            :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" @click="toggleDarkMode" />

          <!-- Mobile Menu Dropdown -->
          <UDropdown :items="mobileMenuItems" :popper="{ placement: 'bottom-end' }"
            class="border bg-surface-primary border-surface-tertiary">
            <UButton color="gray" variant="ghost" icon="i-heroicons-bars-3-20-solid" />
          </UDropdown>
        </div>
      </div>

      <!-- Mobile Search Bar - Expandable -->
      <div v-show="isSearchOpen" class="px-4 pb-4 lg:hidden">
        <USelect icon="i-heroicons-magnifying-glass-20-solid" color="gray" size="sm" placeholder="Search..."
          class="bg-surface-secondary" />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-content-primary font-semibold;
}

/* Add smooth transitions */
.backdrop-blur-sm {
  @apply transition-all duration-200;
}
</style>