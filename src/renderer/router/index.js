import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage/AboutUs.vue').default,
    },
    {
      path: '/about',
      name: 'about-page',
      component: require('@/components/LandingPage/AboutUs.vue').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
