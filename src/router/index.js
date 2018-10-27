import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import House from '@/pages/House'
import Request from '@/pages/Request'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/house/:id',
      name: 'House',
      component: House
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    }
  ]
})
