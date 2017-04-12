import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // seta classe active ne link para ele ficar destacado
})

export default router
