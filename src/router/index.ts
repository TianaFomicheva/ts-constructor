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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewScheme.vue'),

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
