<template>
  <div class="container">
    <div class="image-container">
      <img :src="car.image" :alt="car.name">
    </div>

    <div class="description-container">
      <h3>{{ car.name }}</h3>
      <p>Nombre d'occupants : {{ car.options.person }}</p>
      <p>Climatisation : {{ car.options.aircondition ? 'Oui' : 'Non' }}</p>
      <p>GPS : {{ car.options.navigation ? 'Oui' : 'Non' }}</p>
      <p>Transmission : {{ car.options.transmission }}</p>
      <p>{{ car.price }} €/jour</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    car: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped>
  .container {
    display: flex;
    background: whitesmoke;
    border-radius: 1rem;
    gap: 2rem;
  }

  .image-container {
    width: 35%;
  }

  h3 {
    font-weight: bold;
  }

  p {
    margin: 0.5rem;
  }
</style>