import Vue from 'vue';
import Router from 'vue-router';
import Events from '@/components/Events';
import Suggested from '@/components/Suggested';
import Upcoming from '@/components/Upcoming';
import AddEvent from '@/components/AddEvent';
import Login from '@/components/Login';
import Authorize from '@/components/Authorize';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Today',
      component: Events,
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming,
    },
    {
      path: '/suggested',
      name: 'Suggested',
      component: Suggested,
    },
    {
      path: '/add',
      name: 'AddEvent',
      component: AddEvent,
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
