import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$http = axios;
import First from './components/First.vue'
import Second from './components/Second.vue'
import Map from './components/Map.vue'

Vue.use(VueRouter)
// 定义router(路由)
const routes = [
  { path: '/', component: First },
  { path: '/first', component: First },
  { path: '/second', component: Second },
  { path: '/map', component: Map },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes, // `routes: routes` 的简写
  mode: 'hash'
})

//实例化 vue 实例
new Vue({
  // 定义根组件的选择器
  el: '#app',
  router,
  render: (h) => h(App)
})
