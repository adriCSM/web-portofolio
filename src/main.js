import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router/index.js';
import { MotionPlugin } from '@vueuse/motion';
import store from '@/store';
import axios from 'axios';
import './index.css';
import AOS from 'aos';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

loadFonts();
createApp(App).use(router).use(store).use(MotionPlugin).use(vuetify).use(AOS).mount('#app');
