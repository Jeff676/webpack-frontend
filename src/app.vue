<template>
  <v-app id="app">
     <v-container>
      <v-alert type="success">I'm a basic alert component.</v-alert>
      <!-- <router-link class="texto-rojo" to="/">Home </router-link> |
      <router-link to="/about"> About</router-link> -->
      <router-view/>
      </v-container>
   </v-app>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
