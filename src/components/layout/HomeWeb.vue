<template>
  <section class="md:h-svh bg-home flex md:flex-row flex-col items-center justify-around px-20">
    <div
      class="md:text-start font-semibold md:text-2xl md:text-4xl md:w-1/2 order-last md:order-first"
      data-aos="zoom-in"
    >
      <p class="py-2">Hallo...👋, My name is</p>
      <p class="py-2 text-2xl text-light-blue">Adri Candra Saputra M</p>

      <p class="py-2">I'am <span class="text-light-blue typing2"></span></p>

      <p class="pt-2 font-normal md:text-xl">
        And, I am a Fresh Graduate Mining Engineering from Haluoleo University
      </p>
      <div class="text-light-blue text-5xl flex gap-5 md:justify-start justify-center my-3">
        <div v-for="(icon, index) in icons" :key="index">
          <a :href="icon.href" target="_blank">
            <i :class="icon.icon" class="hover:scale-110 hover:drop-shadow-back-light"></i>
          </a>
        </div>
      </div>

      <div class="text-lg text-black font-normal flex md:flex-row flex-col md:gap-3 pb-5">
        <a href="'../../assets/cv.png'" download="Adri Candra Saputra Mangidi">
          <button
            class="rounded-full py-1 px-3 my-2 md:my-5 bg-light-blue shadow-back-light hover:scale-110 transition-all duration-300"
          >
            <i class="fa fa-download me-3 animate-bounce"></i>Download CV 1
          </button></a
        >
        <a href="'../../assets/CV_Programming.png'" download="Adri Candra Saputra Mangidi">
          <button
            class="rounded-full py-1 px-3 my-2 md:my-5 bg-light-blue shadow-back-light hover:scale-110 transition-all duration-300"
          >
            <i class="fa fa-download me-3 animate-bounce"></i>Download CV 2
          </button></a
        >
      </div>
    </div>
    <div class="home_img" data-aos="zoom-in">
      <img
        src="../../assets/adri.png"
        alt="Adri Candra Saputra Mangidi"
        class="w-[200px] md:w-[400px] py-10"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
  const el = document.querySelector('.typing2');
  if (el) {
    const typed = new Typed(el, {
      strings: ['Engineer', 'Web Developer'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});

const icons = ref([
  {
    icon: 'fab fa-facebook',
    href: 'https://web.facebook.com/adricandrasaputramangidi',
  },
  {
    icon: 'fab fa-instagram',
    href: 'https://www.instagram.com/adri_csm/',
  },
  {
    icon: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195/',
  },
  {
    icon: 'fa fa-envelope',
    href: 'mailto:adricandrasaputramangidi@gmail.com',
  },
  {
    icon: 'fab fa-github',
    href: 'https://github.com/adriCSM',
  },
]);
</script>
