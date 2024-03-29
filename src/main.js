import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams', component: TeamsList // our-domain.com/teams => TeamsList
    },
    {
      path: '/users', component: UsersList // our-domain.com/users => UsersList
    },
    {
      path: '/teams/:teamId', component: TeamMembers// our-domain.com/teams/t1
    }
  ],
  linkActiveClass: 'active',// overwrite the default class name for active links
});

const app = createApp(App)

app.use(router);

app.mount('#app');
