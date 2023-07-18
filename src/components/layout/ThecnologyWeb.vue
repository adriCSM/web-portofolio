<template>
  <div class="h-auto py-10 bg-blue-grey-darken-3">
    <v-container class="h-auto">
      <h1 class="pa-1 font-weight-black pb-3 heading" :class="data.h1">
        <span class="light_blue">Technology</span> Studied
      </h1>
      <v-divider></v-divider>
      <p class="pa-1">
        <span class="teknologi"></span>
      </p>
      <v-row class="techno">
        <v-col cols="12">
          <v-tooltip :text="item.name" location="top" v-for="item in icon" :key="item">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                color="#0fe"
                size="100"
                class="mx-3 my-10 tilt"
                :style="{ boxShadow: '0 0 1rem #0fe' }"
              >
                {{ item.icons }}
              </v-icon>
            </template>
          </v-tooltip>
          <v-divider class="border-opacity-0"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-tooltip text="Node JS Framework" location="top">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                color="#0fe"
                size="50"
                class="mx-3"
                :style="{ textShadow: '0 0 1rem #0fe' }"
              >
                <h6>
                  <span>Express</span>
                </h6>
              </v-icon>
            </template>
          </v-tooltip>
        </v-col>
        <v-col cols="6">
          <v-tooltip text="Node JS Framework" location="top">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                color="#0fe"
                size="50"
                class="mx-3"
                :style="{ textShadow: '0 0 1rem #0fe' }"
              >
                <h6>
                  <span>Hapi</span>
                </h6>
              </v-icon>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import vuetify from '@/plugins/vuetify';
import Typed from 'typed.js';
export default {
  setup() {
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
    const data = computed(() => {
      if (vuetify.display.width.value < 600) {
        return {
          h1: 'text-h5',
        };
      } else {
        return {
          h1: 'text-h4',
        };
      }
    });

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

    return {
      data,
      icon,
    };
  },
};
</script>
