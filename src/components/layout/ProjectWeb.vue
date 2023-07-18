<template>
  <section class="d-flex align-center" :style="{ backgroundColor: '#1f242d', minHeight: '100vh' }">
    <v-container class="h-auto">
      <div>
        <h1 class="pa-1 text-white font-weight-black heading" :class="data.h1">
          Latest <span class="light_blue">Project</span>
        </h1>
      </div>

      <v-row class="my-5" justify="center">
        <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project" class="d-flex">
          <v-hover v-slot="{ isHovering, props }" v-if="project">
            <v-card
              class="mx-auto rounded-xl"
              color="grey-lighten-4"
              max-width="600"
              max-height="250"
              v-bind="props"
            >
              <v-img
                :class="isHovering ? 'zoom' : ''"
                :aspect-ratio="16 / 16"
                cover
                :src="project.image"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex flex-column v-card--reveal transition-in-slowly text-center w-100"
                    style="
                      height: 100%;
                      background: linear-gradient(rgba(0, 0, 0, 0.1), #0fe);
                      bottom: 0;
                      position: absolute;
                    "
                  >
                    <h6 class="text-white pt-15" :style="{ fontSize: data.h6 }">
                      {{ project.name }}
                    </h6>
                    <p class="px-10 text-white my-2" :style="{ fontSize: data.p }">
                      {{ project.description }}
                    </p>
                    <a :href="project.url_site" target="_blank">
                      <div class="pa-2 bg-white rounded-circle d-inline-block">
                        <v-icon color="black" size="20px">mdi-open-in-new</v-icon>
                      </div>
                    </a>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';

const data = computed(() => {
  if (vuetify.display.width.value < 600) {
    return {
      h1: 'text-h5',
      h6: '14px',
      p: '12px',
      order1: 'order-1 text-center text-justify',
      order2: 'order-2 ',
      height: '300',
      flex: 'h-auto d-flex flex-column align-center ',
    };
  } else {
    return {
      h1: 'text-h4',
      h6: '16px',
      p: '14px',
      order1: 'text-start',
      height: '400',
      flex: 'h-screen d-flex  align-center justify-center',
    };
  }
});

const projects = ref();

onMounted(async () => {
  const response = await axios.get('/portofolio/projects');
  projects.value = response.data.data.projects;
  console.log(projects.value);
});
</script>
<style scoped>
.zoom {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
</style>
