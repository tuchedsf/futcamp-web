/**
 * [loaderFactory description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 * context passa a ser o seu "componente" e ele que deverá ser manipulado e que realizara
 * as acoes do seu componente.
 */
const loaderFactory = context => {
  return {
    show () {
      context.$store.dispatch('showLoader')
    },
    hide () {
      context.$store.dispatch('hideLoader')
    }
  }
}

export default loaderFactory
