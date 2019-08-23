<template lang="html">
  <b-Container>
    <b-form @submit.prevent="sendForm" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <label for="text-password">Password</label>
      <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.password"></b-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </b-form-text>
       <b-button center type="submit" variant="primary">Log in</b-button>
    </b-form>
  </b-Container>

</template>

<script>
export default {
  data () {
    return {
      show: "true",
      form: {
        name: '',
        email: '',
        password:''
      },
      user:[]
    }
  },
  methods: {
    sendForm() {
      this.user = JSON.stringify(this.form)
      console.log(this.user)
      this.form.email = ''
      this.form.name = ''

    }
  }
}
</script>

<style lang="css" scoped>
</style>
