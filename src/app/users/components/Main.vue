<template lang="html">
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Campeonatos</th>
          <th>Data Criação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.data._id}}</td>
          <td>{{user.data.email}}</td>
          <td>{{user.data.campeonatos.length}}</td>
          <td>{{user.data.created_at }}</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
<button v-on:click="teste()">Teste</button>
  </div>

</template>

<script>
import { default as swal } from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'UserMain',
  data () {
    return {
      users: [],
      user: {}
    }
  },
  created () {
    this.fetchUsers({})
      .then(() => {
        this.users = this.getUsers
      })
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    ...mapActions(['fetchUsers']),
    teste () {
      swal(
        'Oops...',
        'Something went wrong!',
        'error'
      )
    }
  }
}
</script>

<style lang="sass">
</style>
