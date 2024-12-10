import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/pages/HomePage.vue'),
  },

  {
    path: '/about',
    name: 'About',

    component: () => import('../components/pages/DetileAbout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    from;
    savedPosition;

    if (to.hash) {
      document.title = 'Adri CSM';
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.name || to.hash) {
    next();
  }
});

export default router;
