<template>
  <div class="container">
    <h1>
      Image page
    </h1>
    <ul>
      <li v-for="image of images" :key="image.id">
        <div class="card" style="width: 18rem;">
          <img :src="image.url" class="card-img-top" width="300" height="228" alt="...">
          <div class="card-body">
            <p class="card-text">
              {{image.title}}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "images",
    async fetch({store}) {
      if (store.getters['images/images'].length === 0) {
        await store.dispatch('images/fetch')
      }
    },
    computed: {
      images() {
        return this.$store.getters['images/images']
      }
    },
  }
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
  }
</style>
