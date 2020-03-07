import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import Vcaptura from 'v-captura'

export default Vue => [VueRouter, Vuex, ElementUi, Vcaptura].forEach(plugin => Vue.use(plugin))
