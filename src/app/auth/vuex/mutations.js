export default {
  setCurrentUser (state, user) {
    state.currentUser = user
  },
  setToken (state, token) {
    state.token = token
    localStorage.setItem('token', 'Bearer ' + state.token)
  },
  setExpires (state, expires) {
    state.expires = expires
  }
}
