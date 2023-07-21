<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const progres_linear = ref(0);
const error = computed(() => {
  if (store.state.error) {
    timer('error');
  }
  return store.state.error;
});
const success = computed(() => {
  if (store.state.success) {
    timer('success');
  }
  return store.state.success;
});
const info = computed(() => {
  if (store.state.info) {
    timer('info');
  }
  return store.state.info;
});

// timer
const timer = (mutation) => {
  progres_linear.value = 0;
  const id = setInterval(() => {
    progres_linear.value++;
    if (progres_linear.value > 100) {
      progres_linear.value = 0;
      store.commit(mutation, '');
      return clearInterval(id);
    }
  }, 40);
};
</script>

<template>
  <v-row>
    <v-col>
      <v-alert
        v-if="error"
        color="red"
        elevation="2"
        type="warning"
        border="start"
        class="text-start text-white text-capitalize pa-3 w-auto mx-10 mt-5"
        >{{ error }}
        <v-progress-linear v-model="progres_linear" color="white" absolute location="bottom">
        </v-progress-linear>
      </v-alert>

      <v-alert
        v-if="success"
        color="success"
        elevation="2"
        type="success"
        border="start"
        class="text-start text-white font-weight-light pa-3 mx-5 mt-5"
        >{{ success }}
        <v-progress-linear v-model="progres_linear" color="white" absolute location="bottom">
        </v-progress-linear>
      </v-alert>
      <v-alert
        v-if="info"
        color="info"
        elevation="2"
        type="info"
        border="start"
        class="text-start text-white text-capitalize pa-3 mx-10 mt-5"
        >{{ info }}
        <v-progress-linear v-model="progres_linear" color="white" absolute location="bottom">
        </v-progress-linear>
      </v-alert>
    </v-col>
  </v-row>
</template>
