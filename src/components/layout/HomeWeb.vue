<template>
  <section class="h-svh bg-home flex pt-[60px] items-center justify-around px-20">
    <div class="text-start font-semibold text-4xl w-1/2">
      <p class="py-2">Hallo...👋, My name is</p>
      <h1 class="py-2">Adri C.S Mangidi</h1>

      <h3 class="py-2">I'am <span class="text-light-blue typing2"></span></h3>

      <p class="pt-2 font-normal text-xl">
        And, I am a Fresh Graduate Mining Engineering from Haluoleo University
      </p>
      <div class="text-xl text-light-blue text-5xl flex gap-5 items-center my-3">
        <a href="https://web.facebook.com/adricandrasaputramangidi" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/adri_csm/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:adricandrasaputramangidi@gmail.com">
          <i class="fa fa-envelope"></i>
        </a>
        <a href=" https://github.com/adriCSM" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>

      <div class="text-lg text-black font-light">
        <a href="'../../assets/cv.png'" download="Adri Candra Saputra Mangidi">
          <button
            class="rounded-full py-1 px-3 my-5 me-2 tilt"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
          >
            <i class="fa fa-download me-3"></i>Download CV 1
          </button></a
        >
        <a href="'../../assets/CV_Programming.png'" download="Adri Candra Saputra Mangidi">
          <button
            class="rounded-full py-1 px-3 my-5 tilt"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
          >
            <i class="fa fa-download me-3"></i>Download CV 2
          </button></a
        >
      </div>
    </div>
    <div cols="12 " md="4" sm="4" class="home_img">
      <img src="../../assets/adri.png" alt="Adri Candra Saputra Mangidi" width="400" />
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
