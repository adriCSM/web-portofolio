<template>
  <div style="background-color: #1f242d" class="pa-5">
    <p class="text-white">Copyright &copy; {{ new Date().getFullYear() }} by</p>
    <span class="light_blue">Adri Candra Saputra Mangidi</span>

    <router-link to="#home" style="position: absolute; right: 0; bottom: 0" class="my-5">
      <v-btn variant="text">
        <div
          class="rounded-circle d-inline-block"
          style="background-color: #0fe; box-shadow: 0 0 1rem #0fe"
        >
          <v-icon size="30"> mdi-arrow-up </v-icon>
        </div>
      </v-btn>
    </router-link>
  </div>
</template>
