<template>
  <ul class="nav navbar-nav" v-if="isLogged">
    <router-link to="/dashboard" tag="li" exact ><a>Campeonatos</a></router-link>
    <!-- <li class="active"><a href="#">Campeonatos <span class="sr-onlcurrent)</span></a></li> -->
    <li><a href="#">Usuários  </a></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LeftHeader',
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>
