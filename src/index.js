import App from '@components/App'
import Vue from 'vue'
import router from '@router'
import '@assets/styl/index.styl'
import store from '@store'


new Vue({
  el: '#app',
  router,
  store, 
  render (h) {
    return h(App)
  }
})
