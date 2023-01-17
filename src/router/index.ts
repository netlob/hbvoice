import NProgress from 'nprogress';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/:route(.*)',
    name: '404',
    component: () => import('../pages/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

NProgress.configure({
  template: '<div class="fixed z-59 top-0 left-0 w-full h-0.5 bg-primary" role="bar"></div>'
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
