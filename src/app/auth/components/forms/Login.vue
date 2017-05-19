<template>
  <div class="form-horizontal">
    <fieldset>
      <legend>Bem Vindo</legend>
      <div class="form-group">
        <label for="inputEmail" class="col-lg-2 control-label">Email</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" id="inputEmail" placeholder="Email" v-model="currentUser.email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-lg-2 control-label">Password</label>
        <div class="col-lg-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="currentUser.password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <!--<button type="reset" class="btn btn-default" v-on:click="resetForm">Cancel</button> -->
          <button type="submit" class="btn btn-primary" v-bind:disabled="!isValid" v-on:click="doLogin">Submit</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
import { isEmpty } from 'lodash'
import { mapActions, mapGetters } from 'vuex'
import { default as swal } from 'sweetalert2'

const initialData = {
  token: '',
  expires: '',
  currentUser: {
    _id: '',
    email: '',
    password: '',
    __v: '',
    campeonatos: [],
    created_at: ''
  }
}

export default {
  data () {
    return initialData
  },
  components: {
    isEmpty
  },
  computed: {
    isValid () {
      const currentUser = this.currentUser
      return !isEmpty(currentUser.email) && !isEmpty(currentUser.password)
    },
    ...mapGetters(['getMessage'])
  },
  methods: {
    ...mapActions([
      'attempLogin',
      'resetMessage'
    ]),
    resetForm () {
      this.currentUser = initialData
    },
    doLogin () {
      this.$store.dispatch('resetMessage')
      this.$loader.show()
      const currentUser = this.currentUser
      this.attempLogin({...currentUser})
      .then(() => {
        if (!isEmpty(this.getMessage)) {
          swal('Oopsss... Error: ' + this.getMessage.status, this.getMessage.message, 'error')
        } else {
          this.$router.push('/')
        }
        this.$loader.hide()
      })
    }
  }
}

</script>

<style>
</style>
