<template>
  <div class="container">
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
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import MainButton from '@/components/buttons/MainButton.vue';
  import { createVehicle } from '@/services/api.js';
  import { useRouter } from 'vue-router';
  const router = useRouter();

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

  // const test = car.value.options.aircondition === 'Oui' ? true : false;
  // console.log(test);

  // Mercedes-Benz Classe C
  // https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/mb-c-klasse-4d-grau-2020.png

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
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  form {
    margin: auto;
    width: 40%;
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
