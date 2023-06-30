import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';
import ScrollReveal from 'scrollreveal';

loadFonts();
ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 100 });
createApp(App).use(router).use(ScrollReveal).use(MotionPlugin).use(vuetify).mount('#app');
