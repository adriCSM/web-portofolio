<template>
  <div class="h-auto py-10 bg-blue-grey-darken-3">
    <div class="h-auto">
      <h1 class="pa-1 font-weight-black pb-3 heading">
        <span class="light_blue">Technology</span> Studied
      </h1>
      <div class="divider"></div>
      <p class="pa-1 pt-3">
        <span class="teknologi"></span>
      </p>
      <div class="techno">
        <div cols="12">
          <div class="tooltip" :text="item.name" location="bottom" v-for="item in icon" :key="item">
            <i
              v-bind="item"
              color="#0fe"
              class="mx-5 my-10 tilt"
              :style="{ boxShadow: '0 0 1rem #0fe' }"
            >
              {{ item.icons }}
            </i>
          </div>
          <div class="divider border-opacity-0"></div>
        </div>
      </div>
      <div>
        <div cols="6">
          <div class="tooltip" text="Node JS Framework" location="top">
            <i
              v-bind="item"
              color="#0fe"
              size="50"
              class="mx-3 tilt"
              :style="{ textShadow: '0 0 1rem #0fe' }"
            >
              <h6>
                <span>Express</span>
              </h6>
            </i>
          </div>
        </div>
        <div cols="6">
          <div class="tooltip" text="Node JS Framework" location="top">
            <i
              v-bind="item"
              color="#0fe"
              size="50"
              class="mx-3 tilt"
              :style="{ textShadow: '0 0 1rem #0fe' }"
            >
              <h6>
                <span>Hapi</span>
              </h6>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';

import Typed from 'typed.js';

const icon = computed(() => [
  {
    name: 'HTML',
    icons: `mdi-language-html5`,
  },
  {
    name: 'CSS',
    icons: 'mdi-language-css3',
  },
  {
    name: 'Javascript',
    icons: 'mdi-language-javascript',
  },
  {
    name: 'Vue Js',
    icons: 'mdi-vuejs',
  },
  {
    name: 'Node Js',
    icons: 'mdi-nodejs',
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
