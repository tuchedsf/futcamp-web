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
      console.log({show: context})
    },
    hide () {
      console.log({hide: context})
    }
  }
}

export default loaderFactory
