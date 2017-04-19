
export const attempLogin = (context, payload) => {
  // context.commit('setLogin', payload)
  context.commit('setToken', 'abracadabra')
  context.commit('setExpires', '11222233232')
  // context.commit('setUser', '')
}
