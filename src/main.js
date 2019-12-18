import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue.js'
import {http} from "./config/axiosConfig"

Vue.config.productionTip = false
Vue.prototype.$axios = http

new Vue({
    render: h => h(App),
}).$mount('#app')
