import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router/index.js';
import { MotionPlugin } from '@vueuse/motion';
import ScrollReveal from 'scrollreveal';
import store from '@/store';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

loadFonts();
ScrollReveal({ reset: false, distance: '80px', duration: 2000, delay: 100 });
createApp(App)
  .use(router)
  .use(ScrollReveal)
  .use(store)
  .use(MotionPlugin)
  .use(vuetify)
  .mount('#app');
