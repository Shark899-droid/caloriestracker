import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Inventory from '../views/Inventory.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
