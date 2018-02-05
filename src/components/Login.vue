<template>
  <div class="text-center">
    <form class="form-signin" :model="credentials">
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputUsername" class="sr-only">User Name</label>
      <input type="text" v-model="credentials.username" id="inputUsername" class="form-control" placeholder="User Name" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="credentials.password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="credentials.rememberMe" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit"  @click="signin(credentials)">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        username: null,
        password: null,
        rememberMe: true
      },
      authenticationError: false
    }
  },
  methods: {
    signin (loginForm) {
      this.credentials = loginForm
      this.$http.post('http://localhost:8080/api/authenticate', {
        username: this.credentials.username,
        password: this.credentials.password
      }).then(function (response) {
        console.log('aaaa')
      }
      ).catch(function (error) {
        if (error) {
          console.log(error)
        }
      })
      this.$router.push('management')
    }
  }
}
</script>

<style scoped>
@import "../../static/css/signin.css";
</style>
