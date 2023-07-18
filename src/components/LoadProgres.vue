<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
  show: Boolean,
});
const show = computed(() => props.show);
</script>
<template>
  <v-container style="height: 400px" v-show="show">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col class="text-subtitle-1 text-white text-center" cols="12"> Getting projects </v-col>
      <v-col cols="6">
        <v-progress-linear color="white" indeterminate rounded height="6"></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>
