<template>
  <div class="">
    <Header></Header>
    <Main></Main>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Main from "@/components/main/main.vue"
import Bottom from "@/components/Bottom.vue"
export default {
  components: {
      Header,
      Main,
      Bottom
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
