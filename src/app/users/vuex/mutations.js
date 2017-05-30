export default {
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  },
  removeUser (state, user) {
    state.users = state.users.filter(u => u.data._id !== user.id)
  },
  addUser (state, user) {
    state.users.push(user)
  }
}
