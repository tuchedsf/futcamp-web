import store from '../vuex'

const isRouteAuth = (route) => route.path.indexOf('/login') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  if (!isRouteAuth(to) && !isLogged()) {
    next('/login')
  } else {
    next()
  }
}
