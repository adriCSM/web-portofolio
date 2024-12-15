<template>
  <section class="flex justify-center items-center bg-home md:h-svh px-10">
    <div class="md:w-3/5">
      <h1 class="font-bold heading text-3xl py-3" data-aos="zoom-in">
        Contact <span class="text-light-blue">Me</span>
      </h1>

      <div class="my-10">
        <div class="gap-4 flex flex-col text-light-blue" data-aos="fade-right">
          <input
            type="text"
            name="name"
            required
            v-model="pesan.name"
            placeholder="Type your full name"
            variant="outlined"
            label="Fullname"
            class="w-full p-4 rounded-md bg-transparent border border-light-blue"
          />
        </div>
        <div class="gap-4 flex text-light-blue mt-4" data-aos="fade-left">
          <input
            type="email"
            name="email"
            required
            v-model="pesan.email"
            placeholder="Type your email address"
            variant="outlined"
            label="Email"
            class="w-full p-4 rounded-md bg-transparent border border-light-blue"
          />
          <input
            type="number"
            name="No.Hp"
            required
            v-model="pesan.mobileNumber"
            placeholder="Type your mobile number"
            variant="outlined"
            label="Mobile Number"
            class="w-full p-4 rounded-md bg-transparent border border-light-blue"
          />
        </div>
        <input
          type="text"
          name="message"
          required
          v-model="pesan.message"
          placeholder="Type your message"
          variant="outlined"
          label="Message"
          class="w-full p-4 mt-4 rounded-md bg-transparent border border-light-blue h-48"
          counter="500"
          rows="7"
          data-aos="fade-right"
        />
        <div cols="12">
          <button
            class="rounded-full text-black font-bold tilt px-5 py-2 mt-10"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            @click="send"
            data-aos="fade-up"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import { useStore } from 'vuex';
import axios from 'axios';
import swal from 'sweetalert2';

const pesan = ref({
  name: '',
  email: '',
  mobileNumber: '',
  message: '',
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
