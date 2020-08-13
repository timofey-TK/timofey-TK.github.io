import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import UImini from 'uimini/dist/css/uimini.min.css'

Vue.use(firestorePlugin)
Vue.use(UImini)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
