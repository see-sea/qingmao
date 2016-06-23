import Vue from 'Vue'
import VueRouter from 'vue-router'
Vue.use(require('vue-router'))
import Login from './components/Login'
import Home from './components/Home'
import Moments from './components/Moments'
import momentsIndex from './components/Moments/index'
import Discover from './components/Discover'
import Me from './components/Me'
import Topic from './components/Topic/index'
    /* eslint-disable no-new */
let router = new VueRouter()
router.map({
  '/login': {
    component: Login
  },
  '/home': {
    component: Home
  },
  '/moments': {
    component: Moments,
    subRoutes: {
      '/index': {
        component: momentsIndex
      }
    }
  },
  '/discover': {
    component: Discover
  },
  '/me': {
    component: Me
  },
  '/topic': {
    component: Topic
  }
})

export default router
