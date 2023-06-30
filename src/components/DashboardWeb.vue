<template>
  <div class="h-screen pt-10" :style="{ backgroundColor: '#1f242d' }">
    <v-container class="h-screen">
      <v-row class="text-white d-flex align-center" :class="data.display">
        <v-col cols="12" md="8" sm="8" :class="data.align" class="pt-15">
          <h3 class="pa-2 font-weight-black" :class="data.h3">Hallo, My name is</h3>
          <h1 class="pa-2 font-weight-black" :class="data.h1">Adri C.S Mangidi</h1>
          <h3 class="pa-2 font-weight-black" :class="data.h3">And I'am Back-End Developer.</h3>
          <p class="ps-2 font-weight-light">
            I am a Mining Engineering student (018) at Haluoleo University
          </p>
          <div>
            <router-link to="#">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-facebook</v-icon>
            </router-link>
            <router-link to="#">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-instagram</v-icon>
            </router-link>
            <router-link to="#">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-linkedin</v-icon>
            </router-link>
            <router-link to="#">
              <v-icon color="#0fe" size="40" class="mx-2 my-2">mdi-email-outline</v-icon>
            </router-link>
            <router-link to="#">
              <v-icon color="#0fe" size="40" class="px-3">mdi-github</v-icon>
            </router-link>
          </div>
          <v-btn
            class="rounded-pill text-black font-weight-bold my-5"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            >Download CV</v-btn
          >
        </v-col>
        <v-col cols="12 " md="4" sm="4" :class="data.order1">
          <v-img
            src="../assets/image2.png"
            alt="Adri Candra Saputra Mangidi"
            :height="data.height"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import vuetify from '@/plugins/vuetify';
import { computed } from 'vue';
export default {
  setup() {
    const data = computed(() => {
      if (vuetify.display.width.value < 600) {
        return {
          order1: 'order-1',

          height: '200px',
          h1: 'text-h5',
          h3: 'text-h6',
          align: 'text-center order-2',
          display: 'h-auto mt-15',
        };
      } else {
        return {
          height: '450px',
          h1: 'text-h3',
          h3: 'text-h4',
          align: 'text-start',
          display: 'h-screen ',
        };
      }
    });

    return {
      data,
    };
  },
};
</script>
