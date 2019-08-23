<template lang="html">
  <!-- Jumbotron -->
  <b-jumbotron bg-variant="info" text-variant="white">
    <h1 class="text-c">BootstrapVue</h1>

    <b-row class="center text-center">
      <b-col>
        <font-awesome-icon :icon="['fab', 'google-plus-g']" />
      </b-col>

      <b-col>
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </b-col>

      <b-col>
        <font-awesome-icon :icon="['fas', 'share-alt']" />
      </b-col>

      <b-col>
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </b-col>
    </b-row>
  </b-jumbotron>
  <!-- Jumbotron end -->
</template>

<script>
export default {
  name: "jumbotron1"
}
</script>

<style lang="css" scoped>
.text-c{
  text-align: center;
  font-size: 4.5rem;
}

.center{
  margin: 0px;
  font-size: 2.5rem;
}
</style>
