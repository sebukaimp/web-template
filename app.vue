<script setup>
import NavBar from './components/NavBar.vue';
import { useI18n } from '#i18n'
const { t } = useI18n()
import { useBonosStore } from '~/stores/useBonos'
const bonosStore = useBonosStore()

bonosStore.getBono()


</script>


<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
  </head>

  <div>


    <NavBar />
    <NuxtPage></NuxtPage>
    <FooterComponents></FooterComponents>
    <UButton @click="bonosStore.getBono('es')">Get Bono</UButton>
    <!-- <pre>
    {{ bonosStore.bonoId }}
    {{ bonosStore.bonoData }}
    </pre> -->
  </div>
</template>
