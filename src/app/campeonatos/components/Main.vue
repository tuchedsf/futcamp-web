<template lang="html">
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data Criação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="camp in campeonatos">
          <td>{{camp.data.nome}}</td>
          <td>{{camp.data.created_at | formataData }}</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CampeonatoMain',
  data () {
    return {
      camp: {},
      campeonatos: []
    }
  },
  created () {
    this.buscarCampeonatos({})
      .then(() => {
        this.campeonatos = this.getCampeonatos
      })
  },
  computed: {
    ...mapGetters(['getCampeonatos']),
    formataData: (data) => {
      return data
    }
  },
  methods: {
    ...mapActions(['buscarCampeonatos'])
  }
}
</script>

<style lang="css">
</style>
