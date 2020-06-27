<template>
  <div class="main">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <h1>
          Registration
        </h1>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="text" class="form-control">
        </div>
        <p>
          <nuxt-link to="/">Back to home page</nuxt-link>
        </p>
        <button class="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    layout: 'empty',
    methods: {
      onSubmit() {
        this.$store.dispatch('register');
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .main {
    background-image: url("https://images2.alphacoders.com/817/817949.jpg");
    position: absolute;
    width: 100%;
    height: 103.2%;
    margin-top: -80px;
  }

  .container {
    font-family: 'Raleway', sans-serif;
  }
  h1{
    font-size: 30px;
  }

  form {
    width: 500px;
    margin-left: 300px;
    margin-top: 50px;
  }
</style>
