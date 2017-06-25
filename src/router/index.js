import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Add from '@/components/Add';
import Upcoming from '@/components/Upcoming';
import Login from '@/components/Login';
import Authorize from '@/components/Authorize';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/authorize',
      name: 'Authorize',
      component: Authorize,
    },
  ],
});
