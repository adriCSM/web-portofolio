<template>
  <div>
    <NavbarWeb />

    <main class="z-10">
      <AlertWeb
        style="
          position: fixed;
          top: 50px;
          left: 0;
          z-index: 1;
          min-height: max-content;
          max-width: 400px;
        "
      />
      <DashboardWeb id="home" />
      <AboutWeb id="about" />
      <ProjectWeb id="project" />
      <ThecnologyWeb />
      <!-- <ContactMeVue id="contact" /> -->
    </main>
    <footer>
      <FooterWebVue />
    </footer>
  </div>
</template>

<script setup>
import AboutWeb from '../layout/AboutWeb.vue';
// import ContactMeVue from '../layout/ContactmeWeb.vue';
import DashboardWeb from '../layout/HomeWeb.vue';
import ProjectWeb from '../layout/ProjectWeb.vue';
import ThecnologyWeb from '../layout/ThecnologyWeb.vue';
import NavbarWeb from '../NavbarWeb.vue';
import FooterWebVue from '../FooterWeb.vue';
import AlertWeb from '../AlertWeb.vue';
import { onMounted } from 'vue';
import Typed from 'typed.js';

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
</script>

<style scoped></style>
