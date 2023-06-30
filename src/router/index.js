import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/DashboardWeb.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/AboutWeb.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../components/ContactWeb.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
