import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import SearchResults from '../views/SearchResults';
import Service from '../views/Service';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchResults,
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
    },
  ],
});
