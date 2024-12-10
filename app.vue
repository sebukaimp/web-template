<script setup>
import NavBar from './components/NavBar.vue';

</script>


<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
  </head>

  <div>
    <NavBar />
    <NuxtPage></NuxtPage>
    <FooterComponents></FooterComponents>
  </div>
</template>
