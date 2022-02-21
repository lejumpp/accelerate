import Vue from 'vue';
import Router from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  Instagram = 'instagram',
  NotFound = 'not-found',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Page.Hello,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/hello-world'),
    },
    {
      path: '/instagram',
      name: Page.Instagram,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "instagram" */
          '@/pages/instagram'),
    },
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "not-found" */
          '@/pages/not-found'),
    },
  ],
});
