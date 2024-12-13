<template>
  <nav class="bg-nav fixed w-full">
    <div class="flex flex-row h-nav items-center justify-between">
      <div class="ms-10">
        <router-link class="text-white" to="#home">
          <button class="tilt"><span class="text-light-blue">Adri </span> CSM</button>
        </router-link>
      </div>

      <!-- <div class="">
      <ul>
        <button variant="text" @click="klik" style="position: absolute; right: 0; top: 0">
          <i color="white" size="25" v-if="show"> mdi-close </i>
          <i color="white" size="30" v-else> mdi-menu </i>
        </button>
      </ul>
    </div> -->

      <ul class="flex flex-row gap-5 me-10 text-white">
        <li v-for="item in data" :key="item">
          <router-link :to="item.to">
            <button class="font-normal">
              {{ item.name }}
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';

export default {
  setup() {
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

    const navHidden = computed(() => {});

    const show = ref(false);
    const klik = () => {
      show.value = !show.value;
    };
    return { data, navHidden, show, klik };
  },
};
</script>

<style scoped>
nav {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(25px);
}
nav a {
  color: white;
}

/* nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  color: #0fe;
  text-shadow: 0 0 1rem #0fe;
} */
</style>
