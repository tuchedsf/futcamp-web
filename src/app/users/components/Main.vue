<template lang="html">
  <div class="container">
    <cpForm v-if="abrirForm" :user="user"
        v-on:submit="btnSalvarClicked"
        v-on:cancel="btnCancelClicked"></cpForm>

    <div   v-else>
      <div class="row">
        <div class="col-lg-12">
          <div class="page-header">
            <h1 id="users">Usuários</h1>
          </div>
        </div>
      </div>

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
              <a class="btnx btn-xs" v-on:click="editUser(user.data)"><i class="material-icons">mode_edit</i></a>
              <a class="btnx btn-xs" v-on:click="deleteUser(user.data._id)"><i class="material-icons">clear</i></a>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" class="btn btn-sm btn-primary"
                v-on:click.prevent="btnNovoUsuario">Novo Usuário </button>
    </div>
  </div>
</template>

<script>

import { isEmpty } from 'lodash'
import { default as swal } from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
import cpForm from './form'
export default {
  name: 'UserMain',
  components: {cpForm, isEmpty},
  data () {
    return {
      users: [],
      user: {
        _id: '',
        campeonatos: [],
        email: '',
        password: '',
        perfil: ''
      },
      abrirForm: false
    }
  },
  created () {
    this.fetchUsers({})
      .then(() => {
        this.users = this.getUsers
      })
  },
  computed: {
    ...mapGetters(['getUsers', 'getMessage'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'removeUser', 'adicionarUsuario', 'resetMessage']),
    editUser (user) {
      this.user = user
      this.abrirForm = true
      console.log(this.user)
    },
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
    },
    btnNovoUsuario () {
      this.user = {}
      this.abrirForm = true
    },
    btnSalvarClicked (newUser) {
      this.$store.dispatch('resetMessage')
      this.adicionarUsuario(newUser)
        .then(() => {
          if (!isEmpty(this.getMessage)) {
            swal('Oopsss... Error: ' + this.getMessage.status, this.getMessage.message, 'error')
          } else {
            swal('Operação Completa', 'User Incluído com sucesso!', 'success')
            this.btnCancelClicked()
            this.users = this.getUsers
          }
        })
    },
    btnCancelClicked () {
      this.user = {}
      this.abrirForm = false
    }
  }
}
</script>

<style lang="sass">
</style>
