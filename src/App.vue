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

<style></style>
