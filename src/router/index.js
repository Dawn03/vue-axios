import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login'
import Home from '../components/home'
import Movie from '../components/movie'
import Detail from '../components/detail'
import Bangdan from '../components/bd'
import Rd from '../components/rd'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail/:movieId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/bangdan',
      name: 'bangdan',
      component: Bangdan,
    },
    {
      path: '/rd',
      name: 'rd',
      component: Rd,
    },
  ]
})