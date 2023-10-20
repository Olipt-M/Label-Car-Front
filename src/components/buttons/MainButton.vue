<template>
  <button type="button"><slot/></button>
</template>

<script setup>

</script>

<style scoped>
  button {
    cursor: pointer;
    padding: 1rem;
    background: linear-gradient(90deg, rgb(206, 72, 19), rgb(255, 129, 79));
    color: rgb(37, 37, 37);
    border: none;
    border-radius: 7px;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
  }

  button:hover {
    background: linear-gradient(90deg, rgb(211, 82, 31), rgb(255, 152, 111));
  }
</style>
