<template lang="html">
  <!-- NavBar -->
<b-navbar toggleable="lg" type="dark" variant="warning" sticky>
  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-navbar-nav>
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#">Quienes Somos</b-nav-item>
        <b-nav-item href="#">Productos</b-nav-item>
        <b-nav-item href="#">Contacto</b-nav-item>
      </b-navbar-nav>

    </b-navbar-nav>
  </b-collapse>
</b-navbar>
  <!-- Nabvar end -->
</template>

<script>
export default {
  name: "navbar1"
}
</script>

<style lang="css" scoped>
</style>
