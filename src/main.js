import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import router from './router/index.js';
import './index.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});
axios.defaults.baseURL = import.meta.env.VUE_APP_API_URL;

createApp(App).use(vuetify).use(router).use(store).mount('#app');
