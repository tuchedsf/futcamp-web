<template>
  <div class="form-horizontal">
    <fieldset>
      <legend>Bem Vindo</legend>
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

const initialData = {
  token: '',
  expires: '',
  user: {
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
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  },
  methods: {
    resetForm () {
      this.user = initialData
    },
    doLogin () {
      console.log(this.user)
      this.$router.push('/')
    }
  }
}

</script>

<style>
</style>
