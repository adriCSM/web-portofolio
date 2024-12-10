<template>
  <div>
    <nav
      style="
        background-color: #1f242d05;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: (25px);
        height: 60px;
      "
      class="d-fixed pa-0"
    >
      <NavbarWeb />
    </nav>

    <v-main>
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
      <ContactMeVue id="contact" />
    </v-main>
    <footer>
      <FooterWebVue />
    </footer>
  </div>
</template>

<script setup>
import AboutWeb from '../layout/AboutWeb.vue';
import ContactMeVue from '../layout/ContactmeWeb.vue';
import DashboardWeb from '../layout/HomeWeb.vue';
import ProjectWeb from '../layout/ProjectWeb.vue';
import ThecnologyWeb from '../layout/ThecnologyWeb.vue';
import NavbarWeb from '../NavbarWeb.vue';
import FooterWebVue from '../FooterWeb.vue';
import AlertWeb from '@/components/AlertWeb.vue';
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

<style scoped>
.home_img {
  animation: bounch 4s ease-in-out infinite;
}

@keyframes bounch {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
