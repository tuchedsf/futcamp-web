<template>
  <!-- <header class="page-header row"> -->
    <h1>Dashboard</h1>
  <!-- </header> -->
</template>

<script>
import http from 'src/http'
export default {
  mounted () {
    http.get('http://pokeapi.co/api/v2/pokemon/6/')
    .then(response => response.data)
    .then(data => {
      console.log(data)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
