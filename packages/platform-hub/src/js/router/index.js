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
      props(route) {
        return { search: route.query.q };
      },
    },
    {
      path: '/service/:alias',
      name: 'Service',
      component: Service,
      props(route) {
        return { alias: route.params.alias };
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
