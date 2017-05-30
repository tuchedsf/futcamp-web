import Http from 'src/http'

const httpBase = 'http://localhost:3000/V1/api/users/'

export const getUsers = () => {
  return Http.get(httpBase + 'find')
          .then(response => response.data)
}

export const postUser = (user) => {
  return Http.post(httpBase + 'new', user)
          .then(response => response.data)
}

export const deleteUser = (id) => {
  return Http.delete(httpBase + id, {})
  .then(response => response.data)
}
