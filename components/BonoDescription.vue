<script lang="ts" setup>
import { useBonosStore } from '~/stores/useBonos'
const bonosStore = useBonosStore()
</script>

<template>
  <p class="p-10 my-5 text-lg tracking-tight text-justify lg:text-left" v-html="$t('Hero 01')">

  </p>
</template>
