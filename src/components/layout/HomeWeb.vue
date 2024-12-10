<template>
  <section :style="{ backgroundColor: '#1f242d', minHeight: '100vh' }">
    <v-container class="h-screen">
      <v-row class="text-white d-flex align-center" :class="data.display">
        <v-col cols="12" md="8" sm="8" :class="data.align" class="content-home">
          <h3 class="pa-2 font-weight-black" :class="data.h3">Hallo...👋, My name is</h3>
          <h1 class="pa-2 font-weight-black" :class="data.h1">Adri C.S Mangidi</h1>

          <h3 class="pa-2 font-weight-black" :class="data.h3">
            I'am <span class="light_blue typing2"></span>
          </h3>

          <p class="ps-2 font-weight-light">
            And, I am a Mining Engineering student (018) at Haluoleo University
          </p>
          <div>
            <a href="https://web.facebook.com/adricandrasaputramangidi" target="_blank">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-facebook</v-icon>
            </a>
            <a href="https://www.instagram.com/adri_csm/" target="_blank">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-instagram</v-icon>
            </a>
            <a href="https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195/" target="_blank">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-linkedin</v-icon>
            </a>
            <a href="mailto:adricandrasaputramangidi@gmail.com">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-email-outline</v-icon>
            </a>
            <a href=" https://github.com/adriCSM" target="_blank">
              <v-icon color="#0fe" size="40" class="px-3">mdi-github</v-icon>
            </a>
          </div>

          <a :href="require('../../assets/cv.png')" download="Adri Candra Saputra Mangidi">
            <v-btn
              class="rounded-pill text-black font-weight-bold my-5 me-2 tilt"
              :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
              ><v-icon>mdi-download</v-icon>Download CV 1
            </v-btn></a
          >
          <a
            :href="require('../../assets/CV_Programming.png')"
            download="Adri Candra Saputra Mangidi"
          >
            <v-btn
              class="rounded-pill text-black font-weight-bold my-5 tilt"
              :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
              ><v-icon>mdi-download</v-icon>Download CV 2
            </v-btn></a
          >
        </v-col>
        <v-col cols="12 " md="4" sm="4" :class="data.order1" class="home_img">
          <v-img
            src="../../assets/adri.png"
            alt="Adri Candra Saputra Mangidi"
            :height="data.height"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import vuetify from '@/plugins/vuetify';
import { computed, onMounted } from 'vue';
import Typed from 'typed.js';

const data = computed(() => {
  if (vuetify.display.width.value < 600) {
    return {
      order1: 'order-1',

      height: '200px',
      h1: 'text-h5',
      h3: 'text-h6',
      align: 'text-center order-2',
      display: 'h-auto mt-15',
    };
  } else {
    return {
      height: '450px',
      h1: 'text-h4',
      h3: 'text-h4',
      align: 'text-start',
      display: 'h-screen ',
    };
  }
});

onMounted(() => {
  const el = document.querySelector('.typing2');
  if (el) {
    const typed = new Typed(el, {
      strings: ['Programer', 'Backend Developer'],
      typeSpeed: 200,
      backSpeed: 200,
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
