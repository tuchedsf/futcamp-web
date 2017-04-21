const install = Vue => {
  Vue.$mylog = value => console.log(value)
}

export default { install }
