<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <navbar-strong>
      FlyBaltic
    </navbar-strong>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'home'}">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'tour'}">
            Tour
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'images'}">
            Images
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'about'}">
            About us
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'planes'}">
            Planes
          </nuxt-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link class="nav-link" :to="{name:'login'}">
            Login
          </nuxt-link>
        </li>
        <li class="nav-item" v-else>
          <a @click.prevent="logout" class="nav-link" :to="{name: 'login'}">
            Logout
          </a>
        </li>
        <li class="nav-item">
          <a @click.prevent="register" class="nav-link" :to="{name: 'register'}">
            Register
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "TheHeader",
    computed: {
      hasToken() {
        return this.$store.getters.hasToken
      },
      hasReg() {
        return this.$store.getters.hasReg
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login')
      },
      register (){
        this.$store.dispatch('register');
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background: gainsboro;
    font-family: 'Raleway', sans-serif;
  }

  navbar-strong {
    font-family: 'Courgette', cursive;
    color: navy;
    font-size: 39px;
  }
  .nav-link{
    margin-left: 15px;
  }

  .nav-item {
    font-size: 18px;
  }
</style>
