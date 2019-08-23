<template lang="html">
  <div class="">
      <navbar1></navbar1>
      <carousel></carousel>
      <jumbotron1></jumbotron1>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  import navbar1 from './components/navbar.vue'
  import carousel from './components/carousel.vue'
  import jumbotron1 from './components/jumbotron1.vue'

  export default {
    name: 'home',
    components: {
      navbar1,
      carousel,
      jumbotron1
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
