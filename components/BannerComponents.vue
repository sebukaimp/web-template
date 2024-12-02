<script lang="ts" setup>
interface BannerProps {
  type?: 'info' | 'promo' | 'announcement'
  message: string
  link?: {
    text: string
    url: string
  }
  dismissible?: boolean
}

const props = withDefaults(defineProps<BannerProps>(), {
  type: 'announcement',
  dismissible: true
})

const isVisible = ref(true)

const bannerStyles = computed(() => ({
  info: {
    bg: 'bg-primary-50 dark:bg-primary-900/30',
    text: 'text-primary-900 dark:text-primary-100',
    icon: 'i-heroicons-information-circle'
  },
  promo: {
    bg: 'bg-surface-secondary',
    text: 'text-content-primary',
    icon: 'i-heroicons-sparkles'
  },
  announcement: {
    bg: 'bg-primary-600 dark:bg-primary-800',
    text: 'text-white dark:text-primary-50',
    icon: 'i-heroicons-megaphone'
  }
}))

const currentStyle = computed(() => bannerStyles.value[props.type])
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform -translate-y-3 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-3 opacity-0"
  >
    <div
      v-if="isVisible"
      :class="[currentStyle.bg, 'relative']"
    >
      <div class="px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-center gap-x-3 sm:gap-x-6">
          <div class="flex items-center justify-center flex-1">
            <UIcon
              :name="currentStyle.icon"
              class="w-5 h-5"
              :class="currentStyle.text"
            />
            <p
              :class="[currentStyle.text, 'ml-3 text-label-large truncate']"
            >
              <span class="md:hidden">{{ message }}</span>
              <span class="hidden md:inline">{{ message }}</span>
            </p>
          </div>

          <div class="flex-shrink-0">
            <UButton
              v-if="link"
              :to="link.url"
              color="white"
              variant="link"
              size="xs"
              :class="currentStyle.text"
            >
              {{ link.text }}
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 ml-2" />
            </UButton>
          </div>

          <div v-if="dismissible" class="flex-shrink-0">
            <UButton
              color="white"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              size="xs"
              :class="currentStyle.text"
              @click="isVisible = false"
              aria-label="Dismiss"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>