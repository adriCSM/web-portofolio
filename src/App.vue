<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
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
.light_blue {
  color: #0fe;
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
