const moment = require('moment')

require('moment/locale/pt-br') // locales all in lower-case

const install = (Vue, options) => {
  Vue.prototype.moment = function (...args) {
    return moment(...args)
  }
}

export default { install }
