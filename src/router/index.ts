import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'

//tipo q representa a interface de cada rota da aplicação
const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;