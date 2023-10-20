<template>
  <div class="container">
    <h1>Label Car</h1>
      <CarCard v-for="car in cars" :key="car._id" :car="car" class="cards"/>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import { getVehicles } from '@/services/api.js';
  import CarCard from '@/components/cards/CarCard.vue';

  const cars = ref(undefined);
  onBeforeMount(() => {
    getVehicles()
    .then(response => cars.value = response)
    .catch(error => console.error(error));
  });
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
