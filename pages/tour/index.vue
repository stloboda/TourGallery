<template>
  <div class="main">
    <div class="container">
      <ul>
        <li v-for="tour of tours" :key="tour.id">
          <div class="card" style="width: 18rem;">
            <img :src="tour.url" width="287px" height="228px" alt="">
            <div class="card-body">
              <h5 class="card-title">
                {{tour.country}}
              </h5>
              <h6>
                {{tour.cost}} EUR
              </h6>
              <a @click.prevent="openTour(tour)" class="btn btn-outline-primary">
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
    // middleware: ['auth'],
    async fetch({store}) {
      if (store.getters['tour/tours'].length === 0) {
        await store.dispatch('tour/fetch')
      }
    },
    data: () => ({
    }),
    computed: {
      tours() {
        return this.$store.getters['tour/tours']
      }
    },
    methods: {
      openTour(tour) {
        this.$router.push('/tours/' + tour.id);
        console.log(tour)
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
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
