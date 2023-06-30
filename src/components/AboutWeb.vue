<template>
  <section class="h-auto pt-12 bg-blue-grey-darken-3">
    <v-container class="h-auto">
      <v-row :class="data.flex" class="">
        <v-col cols="12" sm="5" :class="data.order2" class="about-img">
          <v-img
            src="../assets/image2.png"
            alt="Adri Candra Saputra Mangidi"
            :height="data.height"
          />
        </v-col>
        <v-col cols="12" sm="7" :class="data.order1">
          <h1 class="pa-1 font-weight-black heading" :class="data.h1">
            About <span class="light_blue">Me</span>
          </h1>
          <h4 class="pa-1 font-weight-black pb-5 about_content" :class="h4">Back-End Developer</h4>
          <p class="ps-2 about_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facilis
            accusantium! Sit neque nihil exercitationem sed natus quos delectus. Iure at corporis
            voluptatem quos fuga debitis possimus dolore. Dicta, incidunt!
          </p>

          <v-btn
            class="rounded-pill text-black font-weight-bold my-10 about_content"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            >Read more...</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { computed } from 'vue';
import vuetify from '@/plugins/vuetify';
export default {
  setup() {
    const data = computed(() => {
      if (vuetify.display.width.value < 600) {
        return {
          h1: 'text-h4',
          h4: 'text-h5',
          order1: 'order-1 text-center text-start',
          order2: 'order-2 ',
          height: '300',
          flex: 'h-auto d-flex flex-column align-center ',
        };
      } else {
        return {
          h1: 'text-h3',
          order1: 'text-start',
          height: '400',
          flex: 'h-screen d-flex  align-center justify-center',
          h4: 'text-h4',
        };
      }
    });
    return {
      data,
    };
  },
};
</script>
