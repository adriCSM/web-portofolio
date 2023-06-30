<template>
  <div class="h-screen" :style="{ backgroundColor: '#1f242d' }">
    <v-container class="pt-15">
      <h1 class="pa-1 text-white font-weight-black" :class="data.h1">
        Contact <span class="light_blue">Me</span>
      </h1>
    </v-container>
  </div>
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
        };
      } else {
        return {
          h1: 'text-h3',
        };
      }
    });
    return {
      data,
    };
  },
};
</script>
