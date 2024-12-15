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
  <div>
    <div>
      <div
        v-if="error"
        class="text-start bg-red-500 text-white rounded-t-xl capitalize p-3 w-auto pt-3 relative"
      >
        <i class="fa fa-exclamation-triangle"></i>
        {{ error }}
        <progress
          :value="progres_linear"
          max="100"
          class="h-1 rounded-full w-full absolute bottom-0 left-0 z-50"
        ></progress>
      </div>

      <div
        v-if="success"
        class="text-start bg-green-500 text-white rounded-t-xl capitalize p-3 w-auto pt-3 relative"
      >
        <i class="fa fa-circle-check"></i>
        {{ success }}
        <progress
          :value="progres_linear"
          max="100"
          class="h-1 rounded-full w-full absolute bottom-0 left-0 z-50"
        ></progress>
      </div>
      <div
        v-if="info"
        class="text-start bg-orange-500 text-white rounded-t-xl capitalize p-3 w-auto pt-3 relative"
      >
        <i class="fa fa-exclamation-circle"></i>
        {{ info }}
        <progress
          :value="progres_linear"
          max="100"
          class="h-1 rounded-full w-full absolute bottom-0 left-0 z-50"
        ></progress>
      </div>
    </div>
  </div>
</template>

<style scoped>
progress {
  appearance: none;
}

progress::-webkit-progress-bar {
  background-color: transparent;
  border-radius: 9999px;
}

progress::-webkit-progress-value {
  background-color: white;
}
</style>
