import Vue from 'vue'
import App from './App'
import weuiTabs from './components/weui-navbar.vue'
import util from './common/util.js'


Vue.component('weui-tabs', weuiTabs)
Vue.prototype.util = util //挂载到Vue实例上面

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
