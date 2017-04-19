import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../vuex'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // seta classe active ne link para ele ficar destacado
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path.indexOf('/login') === -1) {
    if (store.getters.isLogged) {
      next()
    } else {
      next('/login')
    }
    return
  }
  next()
})

export default router
