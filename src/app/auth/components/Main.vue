<template>
  <!-- <header class="page-header row"> -->
<div>
  <h1>Login</h1>
  <ccLogin/>

</div>

  <!-- </header> -->
</template>

<script>
import CcLogin from './forms/Login'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {

    }
  },
  components: {
    CcLogin
  },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>

<style lang="css" scoped>
</style>
