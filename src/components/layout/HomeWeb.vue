<template>
  <section class="md:h-svh bg-home flex md:flex-row flex-col items-center justify-around px-20">
    <div
      class="md:text-start font-semibold text-2xl md:text-4xl md:w-1/2 order-last md:order-first"
      data-aos="zoom-in"
    >
      <p class="py-2">Hallo...👋, My name is</p>
      <p class="py-2">Adri C.S Mangidi</p>

      <p class="py-2 text-md md:text-2xl">I'am <span class="text-light-blue typing2"></span></p>

      <p class="pt-2 font-normal text-xl">
        And, I am a Fresh Graduate Mining Engineering from Haluoleo University
      </p>
      <div class="text-light-blue text-5xl flex gap-5 md:justify-start justify-center my-3">
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

      <div class="text-lg text-black font-normal flex md:flex-row flex-col md:gap-3 pb-5">
        <a href="'../../assets/cv.png'" download="Adri Candra Saputra Mangidi">
          <button class="rounded-full py-1 px-3 my-5 tilt bg-light-blue shadow-back-light">
            <i class="fa fa-download me-3 animate-bounce"></i>Download CV 1
          </button></a
        >
        <a href="'../../assets/CV_Programming.png'" download="Adri Candra Saputra Mangidi">
          <button class="rounded-full py-1 px-3 my-5 tilt bg-light-blue shadow-back-light">
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
import { onMounted } from 'vue';
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
</script>
