<template>
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" v-on:click="toggle">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <router-link to="/" class="navbar-brand">Fut-Camp</router-link>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>
