<template>
  <ul class="nav navbar-nav" v-if="isLogged">
    <router-link to="/campeonatos" tag="li" exact ><a>Campeonatos</a></router-link>
    <router-link to="/users" tag="li" exact ><a>Usuários</a></router-link>
    <!-- <li class="active"><a href="#">Campeonatos <span class="sr-onlcurrent)</span></a></li> -->
    <!-- <li><a href="#">Usuários  </a></li> -->
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
