<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <ccBrand v-on:toggle="onToggleMenu" />
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" :class="{ in: isOpen }">
      <ccLeftHeader/>
      <ccRightHeader/>
    </div>
  </div>
</nav>
</template>

<script>
import CcLeftHeader from './LeftHeader'
import CcRightHeader from './RightHeader'
import CcBrand from './Brand'

export default {
  name: 'navbar',
  data () {
    return {
      isOpen: false
    }
  },
  components: {
    CcLeftHeader,
    CcRightHeader,
    CcBrand
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<!-- 
<style lang="css" scoped>
</style> -->
