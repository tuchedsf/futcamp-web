import Vue from 'vue'
import App from './App'
import router from './router/' // como termina em / vai buscar o arquivo index dentro da pasta.

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
