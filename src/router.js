import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home/Home.vue'
import Login from './components/Login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
   { path: '/home', component: Home },
   {path: '/login', component: Login}
  ]
})
