<template>
  <div class="main">
    <div class="container">
      <img src="https://images2.alphacoders.com/817/817949.jpg" width="900" height="500" alt />
      <div class="block-1">
        <a
          href="https://www.google.com/maps/place/Riga+galvaspilseta,+%D0%A0%D0%B8%D0%B3%D0%B0,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/data=!4m2!3m1!1s0x46eecfb0e5073ded:0xb4eab70f2dc8ac45?sa=X&ved=2ahUKEwjz1NXM5JLoAhVrposKHcvkBogQ8gEwCnoECA8QBA"
        >
          <input type="button" value="Where are we" />
        </a>
        <nuxt-link :to="{name: 'tour'}">
          <input type="button" value="See our tours" />
        </nuxt-link>
        <nuxt-link :to="{name: 'about'}">
          <input type="button" value="See more" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 100px 200px;
}

.container::before {
  content: "";
  background: gray;
  display: flex;
  width: 81%;
  height: 1px;
  top: -10px;
}

.container::after {
  content: "";
  background: gray;
  display: block;
  width: 81%;
  height: 1px;
  margin-top: 40px;
}
img {
  margin-top: 60px;
}

.block-1 {
  padding: 20px 60px;
  display: flex;
  margin-top: 90px;
}

input {
  padding: 20px 50px;
  font-size: 16px;
  color: black;
  font-family: "Raleway", sans-serif;
  background-color: gainsboro;
  border: none;
  margin-right: 90px;
}
</style>
