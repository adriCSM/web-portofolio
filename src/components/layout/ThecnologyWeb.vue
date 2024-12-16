<template>
  <div class="h-auto py-10 bg-about flex flex-col md:flex-row gap-5 md:gap-0 justify-center">
    <div class="md:w-1/2 px-10 divide-y divide-gray-500">
      <h1 class="font-bold heading text-3xl pb-3" data-aos="fade-up">
        <span class="text-light-blue">Software</span>
      </h1>

      <div
        class="flex justify-center gap-10 pt-5 flex-wrap"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          data-aos="fade-right"
          class="shadow-back-light rounded-lg"
        >
          <div
            id="item.id"
            class="text-light-blue text-3xl md:text-9xl bg-norepeat bg-center bg-white bg-cover p-3 w-[70px] h-[70px] md:w-[150px] md:h-[150px] rounded-t-lg tilt"
            :style="{ backgroundImage: `url(${item.ref})` }"
          ></div>
          <p
            class="md:h-[30px] h-[50px] w-[70px] md:w-[150px] text-sm rounded-b-lg bg-home text-light-blue justify-center flex items-center text-wrap text-ellipsis overflow-hidden"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-10 mt-5 md:mt-0 divide-y divide-gray-500 mt-5 md:mt-0">
      <h1 class="font-bold heading text-3xl pb-3" data-aos="fade-up">
        <span class="text-light-blue">Technology</span> Studied
      </h1>

      <div
        class="flex justify-center gap-10 pt-5 flex-wrap"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <div v-for="(item, index) in icons" :key="index" data-aos="fade-left">
          <i
            id="item.id"
            class="text-light-blue drop-shadow-back-light text-7xl md:text-9xl p-3 w-[70px] md:w-[150px] rounded-lg tilt"
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

const images = ref([
  {
    ref: '/logo/word.png',
    name: 'Word',
  },
  {
    ref: '/logo/excel.png',
    name: 'Excel',
  },
  {
    ref: '/logo/powerpoint.png',
    name: 'Power Point',
  },
  {
    ref: '/logo/surpac.png',
    name: 'Surpac',
  },
  {
    ref: '/logo/whittle.png',
    name: 'Whittle',
  },
  {
    ref: '/logo/minesched.png',
    name: 'Mine Sched',
  },
  {
    ref: '/logo/arcgis.png',
    name: 'ArcGIS',
  },
  {
    ref: '/logo/global_mapper.png',
    name: 'Golbal Mapper',
  },
]);
</script>
