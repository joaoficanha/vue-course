import Vue from 'vue'
import App from './App.vue'
import CountersItem from './Counters-Item.vue'

Vue.config.productionTip = false
Vue.component('counters-item', CountersItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
