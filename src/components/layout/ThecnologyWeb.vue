<template>
  <div class="h-auto py-10 bg-about flex justify-center">
    <div class="md:w-4/6 px-10">
      <div class="divide-y divide-gray-500">
        <h1 class="font-bold heading text-3xl pb-3" data-aos="fade-up">
          <span class="text-light-blue">Technology</span> Studied
        </h1>

        <p class="pt-3 pb-5" data-aos="fade-up" data-aos-delay="200">
          <span class="teknologi"></span>
        </p>
      </div>

      <div
        class="flex justify-center gap-10 mt-5 flex-wrap"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <div v-for="(item, index) in icons" :key="index">
          <i
            id="item.id"
            class="text-light-blue shadow-back-light text-3xl md:text-9xl p-3 w-[70px] md:w-[150px] rounded-lg tilt"
            :class="item.icons"
          >
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import Typed from 'typed.js';

const icons = ref([
  {
    id: 'a',
    name: 'HTML',
    icons: `fab fa-html5`,
  },
  {
    id: 'b',
    name: 'CSS',
    icons: 'fab fa-css3',
  },
  {
    id: 'c',
    name: 'Javascript',
    icons: 'fab fa-js',
  },
  {
    id: 'd',
    name: 'Vue Js',
    icons: 'fab fa-vuejs',
  },
  {
    id: 'e',
    name: 'React Js',
    icons: 'fab fa-react',
  },
  {
    id: 'f',
    name: 'Node Js',
    icons: 'fab fa-node-js',
  },
]);

onMounted(() => {
  const typed = new Typed('.teknologi', {
    strings: [
      'Dapat menggunakan teknologi HTML, CSS, Javascript, dan Node Js',
      'Javascript Framework Vue, framework Node Js Express dan Hapi.',
    ],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
  });

  typed.start();
});
</script>
