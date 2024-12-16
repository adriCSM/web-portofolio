<template>
  <section
    class="md:h-svh pt-12 bg-about flex md:flex-row flex-col items-center justify-center px-10"
  >
    <div class="md:w-1/2 flex justify-center order-last md:order-first" data-aos="zoom-in-up">
      <img
        class="tilt w-[200px] md:w-[400px] pb-10"
        src="../../assets/adri.png"
        alt="Adri Candra Saputra Mangidi"
      />
    </div>
    <div class="md:w-1/2 text-justify md:text-start text-xl" data-aos="zoom-in-up">
      <p class="font-bold text-3xl">About <span class="text-light-blue">Me</span></p>
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
        class="rounded-full text-black font-bold my-10 px-5 py-1 bg-light-blue hover:scale-110 transition-all duration-300 shadow-back-light"
        @click="() => router.push('/about')"
      >
        Read more...
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '../../router';
import Typed from 'typed.js';

onMounted(() => {
  const el = document.querySelector('.title');
  if (el) {
    const typed = new Typed(el, {
      strings: [
        '<span class="text-light-blue">Engineer</span> ',
        '<span class="text-light-blue">Web</span> Developer',
      ],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});
</script>
