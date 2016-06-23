import Vue from 'vue'
Vue.use(require('vue-resource'))

Vue.config.debug = true
Vue.config.devtools = true
Vue.http.headers.common['Access-Control-Expose-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'
    /**
     * Components
     */

let App = Vue.extend({
  data () {
    return {
      backend: 'http://nodeauth-yerko.rhcloud.com/',
      api: 'http://www.weiphp.com/api/',
      resouce: 'http://www.weiphp.com/Public/static/'
    }
  }
})

import router from './route'
router.alias({
  '/': '/home'
})
router.saveScrollPosition = true
router.start(App, '#app')
