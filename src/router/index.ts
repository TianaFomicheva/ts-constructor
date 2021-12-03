import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

interface routeParams {
  path: string,
  name: string,
  component: any,
}

const routes: Array<routeParams> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/NewScheme.vue'),

  },
  {
    path: '/show/:id',
    name: 'Show',
    component: () => import('../views/Show.vue'),

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
