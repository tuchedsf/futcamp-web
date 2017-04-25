const registerStore = store => {
  store.registerModule('FUTCAMP_LOADER', {
    state: {
      show: false
    }
  })
}

export default registerStore
