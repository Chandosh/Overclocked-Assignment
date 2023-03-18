import { guardMyroute, stopNavigation } from 'src/utils/auth.js';
const routes = [
  {
    path: '',
    component: () => import('layouts/PreLoginLayout.vue'),
    beforeEnter: stopNavigation,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/Login.vue'),
      },
    ],
  },
  {
    path: '',
    name: '',
    beforeEnter: guardMyroute,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/applications',
        name: 'applications',
        component: () => import('pages/Application.vue'),
      },
      {
        path: '/applications/:applicationId/offers',
        name: 'offers',
        component: () => import('pages/Offers.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
