export default {
  setLogin (state, user) {
    state.user = user
  },
  setToken (state, token) {
    console.log(token)
    state.token = token
  },
  setExpires (state, expires) {
    state.expires = expires
  }
}
