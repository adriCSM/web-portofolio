<template>
  <div>
    <div>
      <div cols="10" sm="2" class="text-start pa-0" align-self="center">
        <router-link class="text-white" to="#home">
          <button class="font-weight-black light_blue tilt" variant="text">
            <span class="text-capitalize">Adri </span> CSM
          </button>
        </router-link>
      </div>

      <div cols="2">
        <ul>
          <button variant="text" @click="klik" style="position: absolute; right: 0; top: 0">
            <i color="white" size="25" v-if="show"> mdi-close </i>
            <i color="white" size="30" v-else> mdi-menu </i>
          </button>
        </ul>
      </div>
      <div class="pt-0 ps-0 pb-0" cols="auto">
        <div class="pa-0 shrink">
          <ul class="d-flex pa-0 justify-end">
            <li class="pa-0" v-for="item in data" :key="item">
              <router-link class="text-white" aria-current="page" :to="item.to">
                <button class="w-auto text-capitalize" id="button" variant="text">
                  {{ item.name }}
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
