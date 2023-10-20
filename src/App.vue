<template>
  <HeaderLayout/>
  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
</script>

<style>
  * {
      box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    background: rgb(233, 227, 221);
    color: rgb(37, 37, 37);
  }

  .container {
    margin: 2rem;
  }

  img {
    width: 100%;
  }
</style>
