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
import Login from './components/login'
import Home from './components/home'
import Moments from './components/moments'
import Discover from './components/discover'
import Me from './components/me'
import Topic from './components/Topic/index'
let App = Vue.extend({
  data () {
    return {
      backend: 'http://nodeauth-yerko.rhcloud.com/',
      api: 'http://www.weiphp.com/api/'
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
  },
  '/topic': {
    component: Topic
  }
})
router.alias({
  '/': '/home'
})
router.start(App, '#app')
