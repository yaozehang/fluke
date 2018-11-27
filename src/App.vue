<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
  }
}
</script>

<style>

</style>
