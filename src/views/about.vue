<template lang="html">
  <b-container>
    <h2>About Page</h2><hr>
    <b-button  @click="getUsers" variant="primary" href="">
        Obstener Usuarios
    </b-button>
    <b-button  @click="prueba" variant="primary" href="">
        test
    </b-button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.title }}</li>
    </ul>
     <font-awesome-icon icon="user-secret" />
  </b-container>
</template>

<script>
import { testCustom, anotherTest } from '../js/custom'

export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    getUsers () {
      this.axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        console.log(response.status)
        this.users = response.data
      })
    },
    prueba() {
      alert(testCustom(4))
      alert(anotherTest(4))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
