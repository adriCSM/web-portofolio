import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import router from './router/index.js';
import './index.css';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
createApp(App).use(router).use(store).mount('#app');
