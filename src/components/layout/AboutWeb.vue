<template>
  <section class="h-svh pt-12 bg-about flex items-center justify-center px-20">
    <div class="w-1/2 flex justify-center">
      <img class="tilt" src="../../assets/adri.png" alt="Adri Candra Saputra Mangidi" width="400" />
    </div>
    <div class="w-1/2 text-start text-xl">
      <p class="font-bold heading text-3xl">About <span class="text-light-blue">Me</span></p>
      <p class="font-bold text-xl py-3">
        <span class="title"></span>
      </p>
      <p class="font-light text-sm">
        Saya adalah
        <span class="font-bold text-light-blue">Fresh Graduate</span> jurusan
        <span class="font-bold text-light-blue">Teknik Pertambangan</span> di Universitas Halu Oleo.
        Saya memiliki kemampuan melakukan perencanaan penambangan mulai dari estimasi cadangan,
        design pit, sampai dengan mine scheduling. Selain hal tersebut, saya memililki ketertarikan
        dengan programming khusunya sebagai
        <span class="font-bold text-light-blue">Backend Developer</span> dengan menggunakan bahasa
        pemrograman <span class="font-bold text-light-blue">Javascript</span>.
      </p>

      <button
        class="rounded-full text-black font-bold my-10 px-5 py-1 bg-light-blue tilt shadow-back-light"
        to="/about"
      >
        Read more...
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';

import Typed from 'typed.js';

onMounted(() => {
  const el = document.querySelector('.title');
  if (el) {
    const typed = new Typed(el, {
      strings: ['<span class="text-light-blue">Backend</span> Developer'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});
</script>
