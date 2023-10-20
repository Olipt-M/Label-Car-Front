<template>
  <header>
    <p class="logo-extended"><RouterLink :to="{name: 'home'}" class="logo">Label Car</RouterLink></p>
    
    <nav>
      <ul>
        <li><RouterLink :to="{name: 'home'}" class="nav-link">Accueil</RouterLink></li>
        <li><RouterLink :to="{name: 'edit-db'}" class="nav-link">Modifications BDD</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style scoped>
  header {
    color: rgb(37, 37, 37);
    background: linear-gradient(90deg, rgb(206, 72, 19), rgb(255, 129, 79));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-right: 2rem;
  }

  .nav-link, .logo {
    color: rgb(37, 37, 37);
    text-decoration: none;
    padding-bottom: 1rem;
  }

  .logo-extended {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 2rem;
  }

  .nav-link {
    font-size: 1.8rem;
  }

  .nav-link:hover {
    font-style: italic;
  }
  
</style>
