<template>
  <section class="h-screen" :style="{ backgroundColor: '#1f242d' }">
    <v-container class="pt-15 d-flex flex-column justify-center align-center">
      <h1 class="pa-1 text-white font-weight-black heading" :class="data.h1">
        Contact <span class="light_blue">Me</span>
      </h1>

      <v-row class="my-10 contact">
        <v-col cols="12" class="py-0" sm="12">
          <v-text-field
            type="text"
            name="name"
            required
            v-model="fullName"
            placeholder="Type your full name"
            variant="outlined"
            label="Fullname"
            :style="{ color: '#0fe' }"
            :rules="[fullName ? true : 'Is Required']"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="py-0" sm="6">
          <v-text-field
            type="email"
            name="email"
            required
            v-model="email"
            placeholder="Type your email address"
            variant="outlined"
            label="Email"
            :style="{ color: '#0fe' }"
            :rules="[email ? true : 'Is Required']"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" class="py-0" sm="6">
          <v-text-field
            type="number"
            name="No.Hp"
            required
            v-model="mobileNumber"
            placeholder="Type your mobile number"
            variant="outlined"
            label="Mobile Number"
            :style="{ color: '#0fe' }"
            :rules="[mobileNumber ? true : 'Is Required']"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            type="text"
            name="message"
            required
            v-model="message"
            placeholder="Type your message"
            variant="outlined"
            label="Message"
            :style="{ color: '#0fe' }"
            counter="500"
            :rules="[message && message.length > 500 ? 'Max 500 character' : true]"
            rows="5"
          >
          </v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn
            class="rounded-pill text-black font-weight-bold"
            :style="{ backgroundColor: '#0fe', boxShadow: '0 0 1rem #0fe' }"
            >Send</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { computed } from 'vue';
import vuetify from '@/plugins/vuetify';
export default {
  data() {
    return {
      fullName: '',
      email: '',
      mobileNumber: '',
      message: '',
    };
  },
  setup() {
    const data = computed(() => {
      if (vuetify.display.width.value < 600) {
        return {
          h1: 'text-h4',
        };
      } else {
        return {
          h1: 'text-h4',
        };
      }
    });
    return {
      data,
    };
  },
};
</script>
<style></style>
