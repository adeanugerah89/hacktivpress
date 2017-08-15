<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <form class="form-signin">
            <h2 class="form-signin-heading">Please sign up</h2>
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" placeholder="username" required="" autofocus="">
            <label for="inputPassword">Password</label>
            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <br>
            <button @click="signUp()" class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      this.$http.post('/api/signup', {
        username: this.username,
        password: this.password
      })
      .then(res => {
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="css">
</style>
