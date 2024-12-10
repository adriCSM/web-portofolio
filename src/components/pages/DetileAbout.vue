<template>
  <div class="bg-blue-grey-darken-3 min-h-[100vh]">
    <nav class="flex justify-start p-2 md:p-5">
      <v-btn variant="text" color="black" to="/#about">
        <div
          class="rounded-circle d-inline-block"
          style="background-color: #0fe; box-shadow: 0 0 1rem #0fe"
        >
          <v-icon size="25"> mdi-arrow-left </v-icon>
        </div>
      </v-btn>
    </nav>
    <section class="flex flex-col justify-center align-center mt-6 h-auto">
      <v-img src="../../assets/adri.png" alt="adri" width="500" height="500" />
      <p class="text-2xl py-2 font-bold"><span class="typing1 text-teal-300"></span></p>
    </section>
    <v-container>
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
    </v-container>
    <v-container>
      <h1>Sertifikat</h1>
    </v-container>
  </div>
</template>

<script setup>
import Typed from 'typed.js';
import { onMounted } from 'vue';

onMounted(() => {
  const el = document.querySelector('.typing1');
  if (el) {
    const typed = new Typed(el, {
      strings: ['Adri Candra Saputra Mangidi, S.T.'],
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
