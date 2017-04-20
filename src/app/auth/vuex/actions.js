import Http from 'src/http'

export const attempLogin = (context, payload) => {
  return Http.post('http://localhost:3000/V1/api/users/login', payload)
    .then(response => response.data)
    .then(data => {
      context.commit('setToken', data.token)
      context.commit('setExpires', data.expires)
      context.commit('setUser', data.user)
    })
}
