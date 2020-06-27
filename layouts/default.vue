<template>
  <div class="main">
    <TheHeader />
    <link href="https://fonts.googleapis.com/css?family=Courgette|Raleway&display=swap" rel="stylesheet"> 
    <nuxt/>

  </div>
</template>

<script>

  import TheHeader from "../components/TheHeader";
  import TheFooter from "../components/TheFooter";
  export default {
    components: {
      TheFooter,
      TheHeader
    }
  }

</script>

<style scoped>
  .main{
    background-color: rgb(240, 244, 244);;
    position: absolute;
    width: 100%;
    height: 300%;
  }
</style>
