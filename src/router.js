import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from './components/principal'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Principal}
  ]
})

export default router
