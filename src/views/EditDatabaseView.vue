<template>
  <main class="container">
    <h1>Modification de la base de données</h1>

    <form @submit.prevent="createCar()">
      <h2>Ajouter un véhicule</h2>

      <div class="inputs-container">
        <div class="form-group">
          <label for="name">Nom du véhicule :</label>
          <input type="text" id="name" v-model="car.name" required/>
        </div>

        <div class="form-group">
          <label for="aircondition">Climatisation :</label>
          <select id="aircondition" v-model="car.options.aircondition">
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        <div class="form-group">
          <label for="navigation">GPS :</label>
          <select id="navigation" v-model="car.options.navigation">
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        <div class="form-group">
          <label for="transmission">Transmission :</label>
          <select id="transmission" v-model="car.options.transmission">
            <option>Automatique</option>
            <option>Manuelle</option>
          </select>
        </div>

        <div class="form-group">
          <label for="person">Nombre de personnes :</label>
          <input type="number" id="person" v-model="car.options.person" required/>
        </div>

        <div class="form-group">
          <label for="image">Photo :</label>
          <input type="url" id="image" v-model="car.image" required/>
        </div>

        <div class="form-group">
          <label for="price">Prix :</label>
          <input type="number" id="price" v-model="car.price" required/>
        </div>

        <div class="form-group">
          <label for="reservations">Nombre de réservations :</label>
          <input type="number" id="reservations" v-model="car.reservations" required/>
        </div>
      </div>

      <MainButton class="form-button" type="submit">Ajouter</MainButton>
    </form>

    <form @submit.prevent="deleteCar()">
      <h2>Supprimer un véhicule</h2>

      <div class="inputs-container">
        <div class="form-group">
          <label for="transmission">Véhicule :</label>
          <select id="transmission" v-model="carSelectedId">
            <option v-for="car in cars" :key="car._id" :value="car._id">{{ car.name }}</option>
          </select>
        </div>
      </div>

      <MainButton class="form-button" type="submit">Supprimer</MainButton>
    </form>
  </main>
</template>


<script setup>
  import { ref, onBeforeMount } from 'vue';
  import MainButton from '@/components/buttons/MainButton.vue';
  import { getVehicles, createVehicle, deleteVehicle } from '@/services/api.js';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  // Get all vehicles
  const cars = ref(undefined);
  onBeforeMount(() => {
    getVehicles()
    .then(response => cars.value = response)
    .catch(error => console.error(error));
  });

  // Create a new vehicle
  const car = ref({
    name: '',
    options: {
      aircondition: "Oui",
      navigation: "Oui",
      transmission: 'Manuelle',
      person: 5
    },
    image: '',
    price: 0,
    reservations: 0
  });

  const createCar = () => createVehicle({
    name: car.value.name,
    options: {
      aircondition: car.value.options.aircondition === 'Oui' ? true : false,
      navigation: car.value.options.navigation === 'Oui' ? true : false,
      transmission: car.value.options.transmission,
      person: car.value.options.person
    },
    image: car.value.image,
    price: car.value.price,
    reservations: car.value.reservations
  })
  .then(() => {
    router.push({ name: 'home' });
  })
  .catch(error => console.error(error));

  // Delete a vehicle
  const carSelectedId = ref('');
  const deleteCar = () => deleteVehicle(carSelectedId.value)
  .then(() => {
    router.push({ name: 'home' });
  })
  .catch(error => console.error(error));
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  form {
    margin: auto auto 2rem auto;
    width: 50%;
    border: 2px solid rgba(37, 37, 37, 0.7);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputs-container {
    width: 80%;
  }

  .form-group {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .form-group input, .form-group select {
    border: none;
    background: whitesmoke;
    padding: 0.5em;
    border-radius: 7px;
    color: rgb(37, 37, 37);
    font-family: 'Nunito', sans-serif;
    width: 100%;
  }

  .form-button {
    margin: 1rem 0 2rem;
    width: 50%;
  }

  .form-button:active {
    transform: translate3d(0, 1px, 0);
  }
</style>
