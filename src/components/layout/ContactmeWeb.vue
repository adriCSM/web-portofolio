<template>
  <section
    :style="{ backgroundColor: '#1f242d', minHeight: '100vh' }"
    class="d-flex flex-column justify-center align-center"
  >
    <v-container class="pt-15">
      <h1 class="pa-1 text-white font-weight-black heading" :class="data.h1">
        Contact <span class="light_blue">Me</span>
      </h1>

      <v-row class="my-10 contact" justify="center">
        <v-col cols="12" md="10" class="py-0" sm="12">
          <v-text-field
            type="text"
            name="name"
            required
            v-model="pesan.name"
            placeholder="Type your full name"
            variant="outlined"
            label="Fullname"
            :style="{ color: '#0fe' }"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" md="5" class="py-0" sm="6">
          <v-text-field
            type="email"
            name="email"
            required
            v-model="pesan.email"
            placeholder="Type your email address"
            variant="outlined"
            label="Email"
            :style="{ color: '#0fe' }"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="5" class="py-0" sm="6">
          <v-text-field
            type="number"
            name="No.Hp"
            required
            v-model="pesan.mobileNumber"
            placeholder="Type your mobile number"
            variant="outlined"
            label="Mobile Number"
            :style="{ color: '#0fe' }"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" md="10">
          <v-textarea
            type="text"
            name="message"
            required
            v-model="pesan.message"
            placeholder="Type your message"
            variant="outlined"
            label="Message"
            :style="{ color: '#0fe' }"
            counter="500"
            rows="7"
          >
          </v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn
            class="rounded-pill text-black font-weight-bold tilt"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            @click="send"
            >Send</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

const pesan = ref({
  name: '',
  email: '',
  mobileNumber: '',
  message: '',
});

const data = computed(() => {
  if (vuetify.display.width.value < 600) {
    return {
      h1: 'text-h5',
    };
  } else {
    return {
      h1: 'text-h4',
    };
  }
});
const store = useStore();

const send = async () => {
  await axios
    .post(
      '/portofolio/messages',
      { ...pesan.value },
      {
        headers: {
          Accept: ['aplication/json'],
        },
      },
    )
    .then((response) => {
      store.commit('success', response.data.message);
      pesan.value = {
        ...pesan.value,
        name: '',
        email: '',
        mobileNumber: '',
        message: '',
      };
    })
    .catch((err) => {
      if (err.response) {
        store.commit('error', err.response.data.message);
      } else {
        store.commit('error', err.message);
      }
    });
};
</script>
