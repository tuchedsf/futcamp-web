<template lang="html">
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Perfil</th>
          <th>Campeonatos</th>
          <th>Data Criação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.data._id}}</td>
          <td>{{user.data.email}}</td>
          <td>{{user.data.perfil}}</td>
          <td>{{user.data.campeonatos.length}}</td>
          <td>{{ moment(user.data.created_at).format("L")}}</td>
          <td>
            <i class="material-icons">mode_edit</i>
            <a class="btnx btn-xs" v-on:click="deleteUser(user.data._id)"><i class="material-icons">clear</i></a>
          </td>
        </tr>
      </tbody>
    </table>
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
    ...mapActions(['fetchUsers', 'removeUser']),
    deleteUser (id) {
      swal({
        title: 'Confirma a exlusão do Usuario?',
        text: 'Não será possivel desfazer a exclusão!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.removeUser({id})
          .then(() => {
            swal('Operação Completa', 'User Excluído com sucesso!', 'success')
            this.users = this.getUsers
          })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="sass">
</style>
