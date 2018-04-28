import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import SearchResults from '../views/SearchResults';

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
  ],
});
