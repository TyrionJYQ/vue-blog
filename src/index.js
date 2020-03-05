import App from '@components/App'
import Vue from 'vue'
import registerPlugins from '@helper/registerPlugins'
import router from '@router'
import '@assets/styl/index.styl'

registerPlugins(Vue)

new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
