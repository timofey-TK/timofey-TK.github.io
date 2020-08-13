import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Tasksproject/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tasksproject/tasks',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tasks.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
