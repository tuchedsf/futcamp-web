<template lang="html">
<div class="container">
  <form class="form-horizontal">
    <fieldset>
      <legend>Usuário - Form</legend>
      <div class="form-group">
        <label for="inputId" class="col-lg-2 control-label">Id:</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" id="inputId" disabled="true" v-model="user._id">
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail" class="col-lg-2 control-label">Email</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" id="inputEmail" placeholder="Email" v-model="user.email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-lg-2 control-label">Password</label>
        <div class="col-lg-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password">
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-2 control-label">Perfil</label>
        <div class="col-lg-10">
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="admin" checked="" v-model="user.perfil">
              Admin
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="user" v-model="user.perfil">
              User
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios3" value="guest" v-model="user.perfil">
              Guest
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <button type="reset" class="btn btn-primary"
                    v-on:click.prevent="btnCancelar">Cancelar</button>
          <button type="submit" class="btn btn-primary" v-on:click.prevent="btnSalvarClick" >Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
// const initialData = () => {
//   return {
//     user: {
//       _id: '',
//       campeonatos: [],
//       email: '',
//       password: '',
//       perfil: ''
//     }
//   }
// }
export default {
  props: ['user'],
  methods: {
    btnSalvarClick () {
      //  console.log(this.user)
      // if (this.validateForm()) {
      this.$emit('submit', this.user)
        // console.log(this.user)
      // }
    },
    btnCancelar () {
      this.$emit('cancel')
    }
  }

}
</script>

<style lang="css">
</style>
