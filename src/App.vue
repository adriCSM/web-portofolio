<template>
  <v-app>
    <nav :style="{ backgroundColor: '#1f242d', height: '70px' }" class="d-fixed pa-0">
      <NavbarWeb />
    </nav>

    <v-main>
      <DashboardWeb />
      <AboutWeb />
      <ProjectWebVue />
      <ThecnologyWeb />
      <ContactMeVue />
    </v-main>
  </v-app>
</template>

<script>
import AboutWeb from './components/AboutWeb.vue';
import ContactMeVue from './components/ContactWeb.vue';
import DashboardWeb from './components/DashboardWeb.vue';
import ProjectWebVue from './components/ProjectWeb.vue';
import ThecnologyWeb from './components/ThecnologyWeb.vue';
import NavbarWeb from './components/NavbarWeb.vue';

export default {
  name: 'App',
  components: {
    AboutWeb,
    ContactMeVue,
    DashboardWeb,
    ProjectWebVue,
    ThecnologyWeb,
    NavbarWeb,
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
</style>
