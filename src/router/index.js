import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import CreateForm from '../components/CreateForm.vue'
import ViewId from '../components/ViewId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/createForm',
    name: 'createForm',
    component: CreateForm
  },
  {
    path: '/view_id',
    name: 'viewId',
    component: ViewId
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
