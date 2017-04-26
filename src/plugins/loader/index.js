import loaderFactory from './loaderFactory'
import registerStore from './registerStore'
import CcPageLoader from './components/PageLoader'

const install = (Vue, store) => {
  Vue.component('CcPageLoader', CcPageLoader)

  registerStore(store)
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}
export default { install }
