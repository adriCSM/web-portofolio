<template>
  <section class="d-flex align-center" :style="{ backgroundColor: '#1f242d', minHeight: '100vh' }">
    <div class="h-auto">
      <p class="text-white font-bold text-3xl pt-24">
        Latest <span class="text-light-blue">Project</span>
      </p>

      <!-- <LoadData :show="show" /> -->

      <div class="my-5">
        <div cols="12" sm="6" md="4" v-for="project in projects" :key="project" class="d-flex">
          <div v-if="project">
            <div
              class="mx-auto rounded-xl"
              color="grey-lighten-4"
              max-width="600"
              max-height="250"
              v-bind="props"
            >
              <img
                :class="isHovering ? 'zoom' : ''"
                :aspect-ratio="16 / 16"
                cover
                :src="project.image"
              />
              <!-- <v-expand-transition>
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
                    <h6 class="text-white pt-15" >
                      {{ project.name }}
                    </h6>
                    <p class="px-10 text-white my-2" >
                      {{ project.description }}
                    </p>
                    <a :href="project.url_site" target="_blank">
                      <div class="pa-2 bg-white rounded-circle d-inline-block">
                        <v-icon color="black" size="20px">mdi-open-in-new</v-icon>
                      </div>
                    </a>
                  </div>
                </v-expand-transition> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import LoadData from '../LoadProgres.vue';
import store from '../../store';

const projects = ref();
const show = ref(true);
onMounted(async () => {
  await axios
    .get('/portofolio/projects')
    .then((response) => {
      projects.value = response.data.data.projects;
      show.value = false;
    })
    .catch((err) => {
      store.commit('error', err.message);
    });
});
</script>

<style scoped>
.zoom {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
</style>
