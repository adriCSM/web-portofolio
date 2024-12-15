<template>
  <nav class="bg-nav fixed w-full z-50 md:px-20">
    <div class="flex flex-row h-nav items-center justify-between">
      <div class="flex ms-10 w-1/2 justify-start">
        <router-link class="text-white" to="#home">
          <button class="tilt"><span class="text-light-blue">Adri </span> CSM</button>
        </router-link>
      </div>

      <ul
        class="flex md:flex-row flex-col md:gap-5 md:me-10 text-white md:w-1/2 justify-end transition-all duration-300 translate-y-[125px] md:translate-y-0 bg-home md:bg-transparent md:translate-x-[0%]"
        :class="show ? '  rounded-lg  translate-x-[45%] ' : ' translate-x-[250%]  '"
      >
        <!-- <ul class="flex md:flex-row flex-col md:gap-5 md:me-10 text-white w-full justify-end"> -->
        <li v-for="item in data" :key="item">
          <router-link :to="item.to">
            <button class="font-normal p-3 px-5 md:p-0">
              {{ item.name }}
            </button>
          </router-link>
        </li>
      </ul>
      <button @click="openMenu()" class="transition duration-300">
        <i v-if="!show" class="fa fa-bars md:hidden color-white text-2xl cursor-pointer me-5"></i>
        <i v-else class="fa fa-close md:hidden color-white text-2xl cursor-pointer me-5"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    name: 'Home',
    to: '#home',
  },
  {
    name: 'About',
    to: '#about',
  },
  {
    name: 'Project',
    to: '#project',
  },

  {
    name: 'Contact',
    to: '#contact',
  },
]);

const show = ref(false);

const openMenu = () => {
  show.value = !show.value;
  console.log(show.value);
};
</script>

<style scoped>
nav {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(25px);
}
</style>
