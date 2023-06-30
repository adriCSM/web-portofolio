<template>
  <v-container class="d-flex">
    <v-row>
      <v-col class="text-start pa-0" align-self="center">
        <router-link class="text-white" to="#">
          <v-btn class="" variant="text"> Am </v-btn>
        </router-link>
      </v-col>
      <v-col class="pa-0">
        <v-list class="d-flex justify-end" style="background-color: #1f242d">
          <v-list-item class="">
            <router-link class="text-white text-capitalize" aria-current="page" to="/home">
              <v-btn class="" variant="text"> Home </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item class="">
            <router-link class="text-white text-capitalize" aria-current="page" to="/about">
              <v-btn class="" variant="text"> About </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item class="">
            <router-link class="text-white text-capitalize" aria-current="page" to="/project">
              <v-btn class="" variant="text"> Project </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.router-link-active .v-btn {
  color: #0fe;
  text-shadow: 0 0 1rem #0fe;
}
.navbar-toggler {
  background-color: #0fe;
}
</style>
