<template>
  <v-container class="d-flex flex-column">
    <v-row>
      <v-col cols="10" sm="2" class="text-start pa-0" align-self="center">
        <router-link class="text-white" to="#home">
          <v-btn class="font-weight-black light_blue" variant="text">
            <span class="text-capitalize">Adri </span> CSM
          </v-btn>
        </router-link>
      </v-col>
      <v-col cols="2" v-show="navHidden.show">
        <v-list-item>
          <v-btn variant="text" @click="klik" style="position: absolute; right: 0; top: 0">
            <v-icon color="white" size="35"> mdi-menu </v-icon>
          </v-btn>
        </v-list-item>
      </v-col>
      <v-expand-transition>
        <v-col
          cols="12"
          sm="10"
          class="pa-0"
          :style="{ transform: navHidden.transform, transition: 'all 2s ease' }"
          v-show="navHidden.show2 || show"
        >
          <v-list
            class="d-flex pa-0 justify-end"
            style="background-color: #1f242d"
            :class="navHidden.flex"
          >
            <v-list-item
              class="pa-0"
              v-show="navHidden.show2 || show"
              v-for="item in data"
              :key="item"
            >
              <router-link class="text-white" aria-current="page" :to="item.to">
                <v-btn
                  class="w-auto text-capitalize"
                  id="button"
                  variant="text"
                  :class="navHidden.width"
                  @click="klik"
                >
                  {{ item.name }}
                </v-btn>
              </router-link>
            </v-list-item>
          </v-list>
        </v-col>
      </v-expand-transition>
    </v-row>
  </v-container>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import vuetify from '@/plugins/vuetify';
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

    onMounted(() => {
      const section = document.querySelectorAll('section');
      const button = document.querySelectorAll('#button');
      window.onscroll = () => {
        section.forEach((sec) => {
          const top = window.scrollY;
          const topSec = sec.offsetTop;
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');
          if (top >= topSec && top < topSec + height) {
            button.forEach((btn) => {
              btn.classList.remove('active');
              let textNode = btn.querySelector('.v-btn__content').innerHTML;
              if (textNode.toLowerCase() == id) {
                btn.classList.add('active');
              }
            });
          }
        });
      };
    });

    const navHidden = computed(() => {
      if (vuetify.display.width.value < 600) {
        return {
          show: true,
          show2: false,
          flex: 'flex-column',
          width: 'w-screen',
          transform: 'translateY(-20px)',
        };
      } else {
        return {
          show: false,
          show2: true,
        };
      }
    });

    const show = ref(false);
    const klik = () => {
      show.value = !show.value;
    };
    return { data, navHidden, show, klik };
  },
};
</script>
