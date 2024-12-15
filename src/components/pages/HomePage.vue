<template>
  <!-- <NavbarWeb /> -->

  <!-- <AlertWeb class="fixed top-8 right-0 z-50 min-h-full max-w-[400px]" /> -->

  />
  <!-- <DashboardWeb id="home" /> -->
  <!-- <AboutWeb id="about" />
      <ProjectWeb id="project" />
      <ThecnologyWeb />
      <ContactMeVue id="contact" /> -->

  <footer>
    <FooterWebVue />
  </footer>
</template>

<script setup>
import AboutWeb from '../layout/AboutWeb.vue';
import ContactMeVue from '../layout/ContactmeWeb.vue';
import DashboardWeb from '../layout/HomeWeb.vue';
import ProjectWeb from '../layout/ProjectWeb.vue';
import ThecnologyWeb from '../layout/ThecnologyWeb.vue';
import NavbarWeb from '../NavbarWeb.vue';
import FooterWebVue from '../FooterWeb.vue';
import AlertWeb from '../AlertWeb.vue';
import { onMounted } from 'vue';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  const el = document.querySelector('.typing');
  if (el) {
    const typed = new Typed(el, {
      strings: ['Programer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});

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

<style scoped></style>
