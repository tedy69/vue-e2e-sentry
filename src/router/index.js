import Vue from 'vue';
import VueRouter from 'vue-router';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
      title: 'Login',
    },
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next({ path: '/' });
      } else {
        next();
      }
    },
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) {
        next({ path: '/login' });
      } else {
        next();
      }
    },

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Sentry.init({
  Vue,
  dsn: 'https://9ec209363eee4a199562cc6714d7be4c@o513227.ingest.sentry.io/6422457',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export default router;
