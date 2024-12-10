<template>
  <section class="h-auto pt-12 bg-blue-grey-darken-3">
    <v-container class="h-auto">
      <v-row :class="data.flex" class="">
        <v-col cols="12" sm="5" :class="data.order2" class="about-img">
          <v-img
            class="tilt"
            src="../../assets/adri.png"
            alt="Adri Candra Saputra Mangidi"
            :height="data.height"
          />
        </v-col>
        <v-col cols="12" sm="7" :class="data.order1">
          <h1 class="pa-1 font-weight-black heading" :class="data.h1">
            About <span class="light_blue">Me</span>
          </h1>
          <h4 class="pa-1 font-weight-black pb-3 about_content" :class="data.h4">
            <span class="title"></span>
          </h4>
          <p class="pa-1 about_content font-weight-light" style="font-size: 14px; line-height: 2">
            Saya adalah
            <span class="font-weight-bold light_blue">Fresh Graduate</span> jurusan
            <span class="font-weight-bold light_blue">Teknik Pertambangan</span> di Universitas Halu
            Oleo. Saya memiliki kemampuan melakukan perencanaan penambangan mulai dari estimasi
            cadangan, design pit, sampai dengan mine scheduling. Selain hal tersebut, saya memililki
            ketertarikan dengan programming khusunya sebagai
            <span class="font-weight-bold light_blue">Backend Developer</span> dengan menggunakan
            bahasa pemrograman <span class="font-weight-bold light_blue">Javascript</span>.
          </p>

          <v-btn
            class="rounded-pill text-black font-weight-bold my-10 about_content tilt"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            to="/about"
            >Read more...</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import vuetify from '@/plugins/vuetify';
import Typed from 'typed.js';

const data = computed(() => {
  if (vuetify.display.width.value < 600) {
    return {
      h1: 'text-h5',
      h4: 'text-h6',
      order1: 'order-1 text-center text-start',
      order2: 'order-2 ',
      height: '200',
      flex: 'h-auto d-flex flex-column align-center ',
    };
  } else {
    return {
      h1: 'text-h4',
      h4: 'text-h5',
      order1: 'text-start',
      height: '400',
      flex: 'h-screen d-flex  align-center justify-center',
    };
  }
});

onMounted(() => {
  const el = document.querySelector('.title');
  if (el) {
    const typed = new Typed(el, {
      strings: ['<span class="light_blue">Backend</span> Developer'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    typed.start();
  }
});
</script>
