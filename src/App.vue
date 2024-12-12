<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  scrollreveal().reveal('.home_img , ', {
    origin: 'top',
  });
  scrollreveal().reveal(' .about_content,  , .content-home  , .about-img', {
    origin: 'bottom',
  });

  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    axis: true,
    scale: 1.1,
    speed: 900,
    max: 20,
    transition: true,
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.light_blue {
  color: #0fe;
}

nav {
  position: fixed;
  width: 100vw;
  z-index: 1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  color: #0fe;
  text-shadow: 0 0 1rem #0fe;
}
</style>
