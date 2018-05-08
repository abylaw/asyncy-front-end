// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import pagination from 'vuejs-uib-pagination';

import App from './App';
import router from './router';

import AppHeader from './components/AppHeader';

Vue.config.productionTip = false;
Vue.component('app-header', AppHeader);

Vue.use(pagination);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
