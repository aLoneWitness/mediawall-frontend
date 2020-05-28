import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Twitter from '../views/twitter.vue'
import Instagram from '../views/instagram.vue'
import Youtube from '../views/youtube.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/twitter',
    name: 'Twitter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/twitter.vue')
  },
  {
    path: '/instagram',
    name: 'Instagram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/instagram.vue')
  },
  {
    path: '/youtube',
    name: 'Youtube',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/youtube.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
