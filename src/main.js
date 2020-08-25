import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header_Footer/Header.vue'

Vue.config.productionTip = false
Vue.component('myHeader',Header)
new Vue({
  render: a => a(App),
}).$mount('#app')
