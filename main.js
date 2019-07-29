import Vue from 'vue'
import App from './App'
import weuiTabs from './components/weui-navbar.vue'

Vue.component('weui-tabs', weuiTabs)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
