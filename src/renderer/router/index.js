import Vue from 'vue';
import Router from 'vue-router';
import AboutUs from './../components/LandingPage/AboutUs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about-page',
      component: AboutUs,
    },
  ],
});
