<template>
  <div class="container">
    <div class="image-container">
      <img :src="car.image" :alt="movie.title">
    </div>

    <div class="description-container">
      <h3>{{ movie.name }}</h3>
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
    width: 20%;
  }

  h3 {
    font-weight: bold;
  }
</style>