import module from './vuex'

const registerStore = store => {
  store.registerModule('FUTCAMP_LOADER', {...module})
}

export default registerStore
