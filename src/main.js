import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))
Vue.config.debug = true
Vue.config.devtools = true
Vue.http.headers.common['Access-Control-Expose-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'
    /**
     * Components
     */
import Login from './components/Login'
import Home from './components/Home'
import Moments from './components/Moments'
import Discover from './components/Discover'
import Me from './components/Me'
let App = Vue.extend({
  data () {
    return {
      backend: 'http://nodeauth-yerko.rhcloud.com/'
    }
  }
})
let router = new VueRouter()
    /* eslint-disable no-new */
router.map({
  '/login': {
    component: Login
  },
  '/home': {
    component: Home
  },
  '/moments': {
    component: Moments
  },
  '/discover': {
    component: Discover
  },
  '/me': {
    component: Me
  }
})
router.alias({
  '/': '/login'
})
router.start(App, '#app')
