import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    hash: '#home',
    name: 'Home',
    component: () => import('../components/layout/HomeWeb.vue'),
  },
  {
    hash: '#about',
    name: 'About',
    component: () => import('../components/layout/AboutWeb.vue'),
  },
  {
    hash: '#project',
    name: 'Project',
    component: () => import('../components/layout/ContactmeWeb.vue'),
  },

  {
    hash: '#contact',
    name: 'Contact',
    component: () => import('../components/layout/ContactmeWeb.vue'),
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
  if (to.hash) {
    next();
  }
});

export default router;
