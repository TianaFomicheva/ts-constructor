import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// Vue.use(VueRouter);

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
    component: () => import(/* webpackChunkName: "about" */ '../views/NewScheme.vue'),

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
