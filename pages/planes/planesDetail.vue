<template>
  <div class="container">

    <h1>
      {{plane.model}}
    </h1>
    <hr>
    <p>
      {{plane.speed}}
    </p>
    <p>
      {{plane.height}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "planesDetails",
    props: {
      error: {
        type: Object,
        required: true
      }
    },
    async asyncData({$axios, params, error}) {
      try {
        const plane = await $axios.$get(`/plane/${params.id}`);
        return {plane}
      }catch (e) {
        return error(e)
      }
    }
  }
</script>

<style scoped>
  img {
    width: 450px;
    height: 290px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
  }

  .container {
    font-family: 'Raleway', sans-serif;
  }
</style>
