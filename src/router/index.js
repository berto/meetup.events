import Vue from 'vue';
import Router from 'vue-router';
import Events from '@/components/Events';
import Upcoming from '@/components/Upcoming';
import Add from '@/components/Add';
import Login from '@/components/Login';
import Authorize from '@/components/Authorize';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Today',
      component: Events,
      canReuse: false,
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming,
      canReuse: false,
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
