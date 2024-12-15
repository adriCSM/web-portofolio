<template>
  <div class="bg-home min-h-svh px-20">
    <nav class="flex justify-start p-2 md:p-5">
      <router-link to="/#about">
        <div
          class="rounded-full px-3 py-2 bg-light-blue animate-bounce shadow-back-light cursor-pointer"
        >
          <i class="fa fa-arrow-left text-xl text-black"> </i>
        </div>
      </router-link>
    </nav>
    <section class="flex flex-col justify-center items-center mt-6 h-auto">
      <img src="../../assets/adri.png" alt="adri" width="500" height="500" />
      <p class="text-3xl font-bold py-10">Adri Candra Saputra Mangidi, S.T.</p>
      <p class="text-2xl py-2 font-bold"><span class="typing1 text-teal-300"></span></p>
    </section>
    <section>
      <section>
        <h1 class="text-3xl font-bold bg-teal-300 text-black p-1 mb-3 mt-5 rounded-md">Keahlian</h1>
        <div class="flex justify-between gap-5">
          <article class="w-1/2">
            <h1>Pertambangan</h1>
            <p class="text-justify">
              Saya merupakan lulusan dari Jurusan Teknik Pertambangan, Universitas Halu Oleo 4
              Oktober 2024 dengan mengambil judul penelitian "Estimasi Cadangan Endapan Nikel
              Laterit Pada Pit D Blok ITB PT. Bosowa Mining Kecamatan Wiwirano Kabupaten Konawe
              Utara Provinsi Sulawesi Tenggara". Saya memiliki kemampuan dalam menggunakan software
              tambang antara lain sebagai berikut:
            </p>
            <ul class="text-start list-disc ms-4">
              <li>SURPAC</li>
              <li>MineSched</li>
              <li>Whittle</li>
              <li>ArcGIS</li>
              <li>Global Mapper</li>
              <li>Micromine</li>
            </ul>
          </article>
          <article class="w-1/2">
            <h1>Programing</h1>
            <p class="text-justify">
              Selain dari pendidikan pada teknik pertambangan yang saya tempuh, saya juga memiliki
              ketertarikan dalam bidang pemrograman, dimana saya mempelajari bahasa pemrograman
              Javascrip dalam pengembangan Website dengan menggunakan teknologi seperti Node JS,
              Express Js, Hapi Js dalam pembauatan backend dengan menggunakan database MySQL,
              postgreSQL, dan juga MongoDB. Selain disisi backend, saya juga mempelajari pada sisi
              frontend dengan menggunakan framework Vue JS dan library React JS.
            </p>
          </article>
        </div>
      </section>
      <section>
        <article>
          <h1 class="text-3xl font-bold bg-teal-300 text-black p-1 mb-3 mt-5 rounded-md">
            Pendidikan
          </h1>
          <div class="flex justify-between gap-5">
            <ul class="text-start list-disc ms-4">
              <li>SD Negeri 2 Lambangi (2006 - 2012)</li>
              <li>SMP Negri 1 Wonggeduku (2012 - 2015)</li>
              <li>SMA Negeri 1 Wonggeduku (2015 - 2018)</li>
              <li>S1 Teknik Pertambangan Universitas Halu Oleo (2018-2024)</li>
            </ul>
          </div>
        </article>
      </section>
    </section>
    <section>
      <h1>Sertifikat</h1>
    </section>
  </div>
</template>

<script setup>
import Typed from 'typed.js';
import { onMounted } from 'vue';

onMounted(() => {
  const el = document.querySelector('.typing1');
  if (el) {
    const typed = new Typed(el, {
      strings: ['Fresh Graduate of Mining Engineer'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});
</script>

<style></style>
