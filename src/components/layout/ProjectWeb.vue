<template>
  <section class="d-flex align-center bg-home md:min-h-svh p-10 pb-20">
    <div class="h-auto">
      <p class="text-white font-bold text-3xl py-5">
        Latest <span class="text-light-blue">Project</span>
      </p>

      <div class="py-5 flex gap-10 flex-wrap justify-center" v-if="projects">
        <div
          v-for="project in projects"
          :key="project"
          class="w-full md:w-[400px] rounded-xl shadow-back-light tilt"
          data-aos="flip-left"
        >
          <img
            :src="project.image"
            alt="project.name"
            class="w-[400px] md:h-[250px] rounded-t-xl"
          />
          <p
            class="p-5 md:text-xl bg-about rounded-b-xl text-light-blue text-nowrap text-ellipsis overflow-hidden"
          >
            {{ project.name }}
          </p>
        </div>
      </div>
      <div class="py-5 flex gap-10 flex-wrap justify-center" v-else>
        <div
          v-for="project in Array.from({ length: 6 }, (_, i) => i + 1)"
          :key="project"
          class="w-full md:w-[400px] h-[250px] rounded-xl animate-pulse"
        >
          <div class="h-4/5 rounded-t-xl bg-gray-300" />
          <div class="p-5 md:text-xl h-1/5 bg-about rounded-b-xl">
            <div class="h-2 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

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
