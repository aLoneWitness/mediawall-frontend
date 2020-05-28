import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Twitter from '../views/Twitter'
import Youtube from '../views/Youtube'
import Instagram from '../views/Instagram'

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
    component: Twitter
  },
  {
    path: '/instagram',
    name: 'Instagram',
    component: Instagram
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
