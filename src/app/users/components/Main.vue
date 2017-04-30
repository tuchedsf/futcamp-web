<template lang="html">
  <div>
<h1>Teste</h1>
<button v-on:click="teste()">Teste</button>
  </div>

</template>

<script>
import { default as swal } from 'sweetalert2'
export default {
  name: 'UserMain',
  methods: {
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
