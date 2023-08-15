<template>
  <v-app>
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
  </v-app>
</template>

<script setup>
import AboutWeb from './components/layout/AboutWeb.vue';
import ContactMeVue from './components/layout/ContactmeWeb.vue';
import DashboardWeb from './components/layout/HomeWeb.vue';
import ProjectWeb from './components/layout/ProjectWeb.vue';
import ThecnologyWeb from './components/layout/ThecnologyWeb.vue';
import NavbarWeb from './components/NavbarWeb.vue';
import FooterWebVue from './components/FooterWeb.vue';
import { onMounted } from 'vue';
import scrollreveal from 'scrollreveal';
import VanillaTilt from 'vanilla-tilt';
import AlertWeb from '@/components/AlertWeb.vue';

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
