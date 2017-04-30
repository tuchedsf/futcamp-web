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
import { mapActions } from 'vuex'

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
    }
  },
  methods: {
    ...mapActions([
      'attempLogin'
    ]),
    resetForm () {
      this.currentUser = initialData
    },
    doLogin () {
      // console.log(this.user)
      this.$loader.show()
      const currentUser = this.currentUser
      // this.$store.dispatch('attempLogin', {...user})
      this.attempLogin({...currentUser})
      .then(() => {
        this.$router.push('/')
        this.$loader.hide()
      })
    }
  }
}

</script>

<style>
</style>
