import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from 'my-vue-app/src/store';
import axios from 'axios';
import router from '../my-vue-app/src/router/index.js';
import './index.css';

import { MotionPlugin } from '@vueuse/motion';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
createApp(App).use(MotionPlugin).use(router).use(store).mount('#app');
