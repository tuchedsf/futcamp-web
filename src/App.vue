<template>
  <div id="app">
    <CcPageLoader></CcPageLoader>
    <ccNavbar></ccNavbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CcNavbar from './components/root/header/navbar'

export default {
  name: 'app',
  components: {
    CcNavbar
  }
}
</script>
<style src="./assets/sass/app.scss" lang="sass"></style>
