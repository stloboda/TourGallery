<template>
  <div class="container">
    <h1>
      Error 404
    </h1>
    <p>
      <nuxt-link :to="{name: 'home'}">
        Back to home
      </nuxt-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Error",
    layout: 'empty',
    props: {
      error: {
        type: Object,
        required: true
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .container {
    width: 600px;
    margin-top: 50px;
  }

  h1 {
    color: red;
  }
</style>
