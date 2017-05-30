// import Http from 'src/http'

// const httpBase = 'http://localhost:3000/V1/api/users/'
// import * from '../services'
// import * as services from './actions'

import { getUsers, postUser, deleteUser } from '../services'

export const fetchUsers = (context, payload) => {
  return getUsers()
          .then(data => {
        //    console.log(JSON.stringify(data))
            context.commit('setUsers', data)
          })
          .catch(err => {
            let erro = err
            context.commit('setMessage', erro.response.data)
          })
}

export const removeUser = (context, payload) => {
  const id = payload.id
  return deleteUser(id)
    .then(data => {
      context.commit('removeUser', payload)
    })
    .catch(err => {
      let erro = err
      context.commit('setMessage', erro.response.data)
    })
}

export const adicionarUsuario = (context, payload) => {
//  console.log(payload)
//  const user = payload
//  user.delete('_id')
  return postUser(payload)
    .then(data => {
      context.commit('addUser', data)
    })
    .catch(err => {
      let erro = err
      context.commit('setMessage', erro.response.data)
    })
}
