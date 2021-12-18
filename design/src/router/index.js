import Vue from 'vue'
import VueRouter from 'vue-router'

import Traffic from '../views/Traffic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/traffic',
    name: 'traffic',
    component: Traffic
  },
  {
    path: '/energy',
    name: 'energy',
    component: () => import('../views/Energy.vue')
  },
  {
    path: '/air',
    name: 'air',
    component: () => import('../views/Air.vue')
  },
  {
    path: '/park',
    name: 'park',
    component: () => import('../views/Park.vue')
  },
  {
    path: '/department',
    name: 'department',
    component: () => import('../views/Department.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
