import Http from 'src/http'

export const buscarCampeonatos = (context, payload) => {
  return Http.get('http://localhost:3000/V1/api/campeonatos/find')
    .then(response => response.data)
    .then(data => {
      console.log('aqui' + data)
      context.commit('setCampeonatos', data)
    })
}
