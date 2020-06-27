<template>
  <div class="main">
    <div class="container">
      <h1>
        {{pageTitle}}
      </h1>
      <ul>
        <li v-for="plane of planes" :key="plane.id">
          <div class="card" style="width: 18rem;">
            <img :src="plane.url" width="287px" height="228px" alt="">
            <div class="card-body">
              <h5 class="card-title">
                {{plane.model}}
              </h5>
              <a @click="onGoToDetail(plane)" class="btn btn-outline-primary">
                See more
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      type: Object,
      required: true
    },
    async fetch({store}) {
      if (store.getters['planes/planes'].length === 0) {
        await store.dispatch('planes/fetch')
      }
    },
    data: () => ({
      pageTitle: 'Planes page'
    }),
    computed: {
      planes() {
        return this.$store.getters['planes/planes']
      }
    },
    methods: {
      onGoToDetail (plane) {
        this.$router.push('/planes/' + plane.id);
        console.log(plane)
      }
    }
  }
</script>
<style scoped>
  .main {
    background: gainsboro;
    position: absolute;
    width: 100%;
    height: 300%;
  }

  .container {
    margin-top: 10px;
    font-family: 'Raleway', sans-serif;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
  }

  .card {
    margin-right: 30px;
    margin-top: 20px;
    transition: all ease .03s;
  }

  .card:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
</style>
