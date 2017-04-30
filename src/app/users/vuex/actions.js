import Http from 'src/http'

export const fetchUsers = (context, payload) => {
  return Http.get('http://localhost:3000/V1/api/users/find')
          .then(response => response.data)
          .then(data => {
            console.log(JSON.stringify(data))
            context.commit('setUsers', data)
          })
}
