import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import router from './router/index.js';
import AOS from 'aos';
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import './index.css';
import 'aos/dist/aos.css';

AOS.init({
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom',
  duration: 800,
});

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createApp(App).use(router).use(store).use(VueSweetalert2).mount('#app');
