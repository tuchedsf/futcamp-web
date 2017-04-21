<template>
  <ul class="nav navbar-nav navbar-right">
    <li class="dropdown" v-bind:class="{ open: isOpenMenu }" v-if="isLogged">
          <a href="javascript:;" class="dropdown-toggle" v-on:click="openMenuClick()">Bem vindo {{currentUser.email}} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="javascript:;">Action</a></li>
            <li><a href="javascript:;">Another action</a></li>
            <li><a href="javascript:;">Something else here</a></li>
            <li class="divider"></li>
            <li><a v-on:click.once="sairClick"> Sair</a></li>
          </ul>
      </li>
    <router-link to="/login" tag="li" exact v-else><a>Login</a></router-link>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RightHeader',
  data () {
    return {
      isOpenMenu: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    ...mapActions(['attempLoggout']),
    openMenuClick () {
      this.isOpenMenu = !this.isOpenMenu
    },
    sairClick () {
      this.attempLoggout()
      this.$router.push('/login')
    }
  }
}
</script>
