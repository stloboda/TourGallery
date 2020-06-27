import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Tour from './pages/tour/index'
import Images from './pages/images'
import About from './pages/about'
import Planes from './pages/planes'
import Login from './pages/login'
import Register from './pages/register'
import PlanesDetail from './pages/planes/planesDetail'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'register',
        path: '/:lang?/register',
        component: Register
      },
      {
        name: 'login',
        path: '/:lang?/login',
        component: Login
      },
      {
        name: 'planes',
        path: '/:lang?/plane',
        component: Planes
      },
      {
        name: 'plane',
        path: '/:lang?/plane:id',
        component: PlanesDetail
      },
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'images',
        path: '/:lang?/images',
        component: Images
      },
      {
        name: 'tour',
        path: '/:lang?/tours',
        component: Tour
      },
      {
        name: 'home',
        path: '/:lang?/home',
        component: Home
      }
    ]
  })
}
