import loaderFactory from './loaderFactory'

const install = Vue => {
  Object().definePropertiy(Vue.prototype, '$loader', {
    get () {
      return {
        show: () => console.log({show: this}),
        hide: () => console.log({hide: this})
      }
    }
  })
}
export default { install }
