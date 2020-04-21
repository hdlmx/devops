import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue.js'
import {http} from "./config/axiosConfig"
import echarts from 'echarts'


Vue.config.productionTip = false
Vue.prototype.$axios = http
Vue.prototype.$echarts = echarts

new Vue({
    render: h => h(App),
}).$mount('#app')
