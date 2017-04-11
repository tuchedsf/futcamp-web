<template>
  <div id="app">
    <ccNavbar></ccNavbar>
    <div class="container">
      <h1>Olá</h1>
    </div>
  </div>
</template>

<script>
import CcNavbar from './components/root/navbar'

export default {
  name: 'app',
  components: {
    CcNavbar
  }
}
</script>
<style src="./assets/sass/app.scss" lang="sass"></style>
