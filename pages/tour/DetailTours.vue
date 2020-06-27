<template>
  <div class="container">
    <hr>
    <img :src="tours.url" alt="">
    <h1>
      {{tours.country}}
    </h1>
    <hr>
    <p>
      {{tours.description}}
    </p>
    <p>
      {{tours.cost}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "DetailTours",
    async asyncData({$axios, params, error}) {
      try {
        const tours = await $axios.$get(`/tours/${params.id}`);
        return {tours}
      } catch (e) {
        return error(e)
      }
    }
  }
</script>

<style scoped>

</style>
