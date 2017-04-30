// import Http from 'src/http'

import { postLogin } from '../services'

export const attempLogin = (context, payload) => {
  return postLogin(payload.email, payload.password)
    .then(data => {
      context.commit('setToken', data.token)
      context.commit('setExpires', data.expires)
      context.commit('setCurrentUser', data.user)
    })
}

export const attempLoggout = (context, payload) => {
  context.commit('setToken', '')
  context.commit('setExpires', '')
  context.commit('setCurrentUser', {})
}
