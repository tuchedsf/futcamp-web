import Http from 'src/http'

export const postLogin = (email, password) => {
  return Http.post('http://localhost:3000/V1/api/users/login', {email, password})
          .then(response => response.data)
}
