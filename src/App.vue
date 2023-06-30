<template>
  <v-app>
    <nav :style="{ backgroundColor: '#1f242d', height: '60px' }" class="d-fixed pa-0">
      <NavbarWeb />
    </nav>

    <v-main>
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

<script>
import AboutWeb from './components/AboutWeb.vue';
import ContactMeVue from './components/ContactWeb.vue';
import DashboardWeb from './components/DashboardWeb.vue';
import ProjectWeb from './components/ProjectWeb.vue';
import ThecnologyWeb from './components/ThecnologyWeb.vue';
import NavbarWeb from './components/NavbarWeb.vue';
import FooterWebVue from './components/FooterWeb.vue';
import { onMounted } from 'vue';
import scrollreveal from 'scrollreveal';

export default {
  name: 'App',
  components: {
    AboutWeb,
    ContactMeVue,
    DashboardWeb,
    ProjectWeb,
    ThecnologyWeb,
    NavbarWeb,
    FooterWebVue,
  },
  setup() {
    onMounted(() => {
      scrollreveal().reveal('.content-home , .heading ', {
        origin: 'top',
      });
      scrollreveal().reveal('.home_img , .ptoject , .contact, .techno', {
        origin: 'bottom',
      });
      scrollreveal().reveal('.content-home h1 , .about-img, .express', {
        origin: 'left',
      });
      scrollreveal().reveal(' .about_content, .hapi', {
        origin: 'right',
      });
    });

    return {};
  },
};
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

footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
}

.active {
  color: #0fe;
  text-shadow: 0 0 1rem #0fe;
}
</style>
