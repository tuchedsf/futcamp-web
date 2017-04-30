<template lang="html">
  <div>
<h1>Teste</h1>
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
