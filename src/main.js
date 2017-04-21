import Vue from 'vue'
import App from './App'
import router from './router/' // como termina em / vai buscar o arquivo index dentro da pasta.
import store from './vuex/'
import Loader from './plugins/loader/'

Vue.config.productionTip = false
Vue.use(Loader)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  mounted () {
    Vue.$mylog(this)
  }
})
