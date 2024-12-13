<template>
  <section class="min-h-full bg-emerald-500">
    <div class="h-screen">
      <div class="text-white d-flex align-center">
        <div cols="12" md="8" sm="8" class="content-home">
          <h3 class="pa-2 font-weight-black">Hallo...👋, My name is</h3>
          <h1 class="pa-2 font-weight-black">Adri C.S Mangidi</h1>

          <h3 class="pa-2 font-weight-black">I'am <span class="light_blue typing2"></span></h3>

          <p class="ps-2 font-weight-light">
            And, I am a Mining Engineering student (018) at Haluoleo University
          </p>
          <div>
            <a href="https://web.facebook.com/adricandrasaputramangidi" target="_blank">
              <i color="#0fe" size="40" class="mx-2 my-2">mdi-facebook</i>
            </a>
            <a href="https://www.instagram.com/adri_csm/" target="_blank">
              <i color="#0fe" size="40" class="mx-2 my-2">mdi-instagram</i>
            </a>
            <a href="https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195/" target="_blank">
              <i color="#0fe" size="40" class="mx-2 my-2">mdi-linkedin</i>
            </a>
            <a href="mailto:adricandrasaputramangidi@gmail.com">
              <i color="#0fe" size="40" class="mx-2 my-2">mdi-email-outline</i>
            </a>
            <a href=" https://github.com/adriCSM" target="_blank">
              <i color="#0fe" size="40" class="px-3">mdi-github</i>
            </a>
          </div>

          <a href="'../../assets/cv.png'" download="Adri Candra Saputra Mangidi">
            <button
              class="rounded-pill text-black font-weight-bold my-5 me-2 tilt"
              :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            >
              <i>mdi-download</i>Download CV 1
            </button></a
          >
          <a href="'../../assets/CV_Programming.png'" download="Adri Candra Saputra Mangidi">
            <button
              class="rounded-pill text-black font-weight-bold my-5 tilt"
              :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            >
              <i>mdi-download</i>Download CV 2
            </button></a
          >
        </div>
        <div cols="12 " md="4" sm="4" class="home_img">
          <img src="../../assets/adri.png" alt="Adri Candra Saputra Mangidi" width="100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

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
