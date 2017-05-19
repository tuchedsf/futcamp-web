export default {
  setCurrentUser (state, user) {
    state.currentUser = user
  },
  setToken (state, token) {
    state.token = token
  },
  setExpires (state, expires) {
    state.expires = expires
  },
  setMessage (state, message) {
    state.errorMessage = message
  }
}
