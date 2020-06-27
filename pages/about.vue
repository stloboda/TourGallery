<template>
  <div class="container">
    <div class="container-about">
      <div class="about-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/%D0%A0%D0%B8%D0%B3%D0%B0_%28%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F%29_%D0%92%D0%B8%D0%B7%D0%B8%D1%82%D0%BD%D0%B0%D1%8F_%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0_%D0%A0%D0%B8%D0%B3%D0%B8_%28%D0%94%D0%BE%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%A0%D0%B8%D0%B6%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA%29_-_panoramio.jpg"
          width="400" height="500" alt="">
        <h4>
          Latvian language
        </h4>
        <br>
        <p>
          Language - Latvian (state), Russian. English and German are less common.
        </p>
        <br>
        <h4 class="holiday">
          Sights of Latvia
        </h4>
        <br>
        <p class="sights">
          An old city in Riga (Latvian: Vecrīga, also known as Old Riga, Old Riga) - the oldest part of the city on the
          right bank of the Daugava River, famous for its cathedrals and other historical buildings.
          It is limited by the embankment on November 11, 13 January street, Krishjan Valdemara street and Aspazijas and
          Siegfried Anna Meyerovitsa boulevards.
          Old Riga on the map of Riga.
          In 1967, the Old Town received the status of a protected area, since 1983 - a monument city, in 1997 the
          historical center of Riga (Old Town) was included in the UNESCO World Heritage List.
        </p>
        <br>
        <h2 class="lt-vl">
          Lithuania, Vilnius
        </h2>
        <br>
        <p>
          Vilnius is the capital of Lithuania, famous for its Baroque buildings. They are especially numerous in the
          medieval Old Town with cobblestone streets, where the cathedral of St. Stanislav in the neoclassical style and
          the Gothic Church of St.
        </p>
        <p>
          Anne are also located. The sharp shrine (or Aushros gate), where the miraculous image
          of the Mother of God of Ostrobramskoy is stored, was once part of the city fortress wall.
        </p>
      </div>
      <div class="about-text">
        <h2>
          Latvia, Riga
        </h2>
        <br>
        <p>
          Hospitable Latvia is a cozy old Riga with magnificent architectural monuments, affectionate Jurmala with sandy
          beaches and the blue sea, the ruins of castles in Sigulda and Cesis.
        </p>
        Latvia is famous for its old traditions. Residents carefully preserve folk traditions, cultural monuments,
        masterpieces of architecture.
        <p>
          Latvia is becoming an increasingly popular tourist destination in Europe. Guests from all over the world come
          to Riga to relax by the sea in Jurmala, visit Riga, and go to Sigulda in winter.
        </p>
        <br>
        <h4>
          Geographical position of Latvia
        </h4>
        <br>
        <p>
          The geographical position of Latvia is extremely convenient. The waters of the Baltic Sea and the Gulf of Riga
          are washed by its low-lying shores for 500 km. There are no natural bays, but the built harbors allowed the
          creation of large ports. The open sea near the coast does not freeze, therefore in Liepaja and Ventspils
          navigation does not stop all year round.
        </p>
        <img class="lt" src="https://tripmydream.cc/travelhub/travel/block_gallery/98/868/gallery_first_98868.jpg"
             width="400"
             height="500" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  .container {
    font-family: 'Raleway', sans-serif;
    margin-top: 10px;
  }

  .container-about {
    width: 100%;
    margin-left: -17px;
    margin-right: -17px;
    position: relative;
  }

  .about-img {
    width: 50%;
    float: left;
    margin-top: 100px;
    margin-left: 30px;
    flex-wrap: wrap;
    padding-left: 5px;
  }

  .about-text {
    padding-top: 100px;
    padding-left: 650px;
  }

  .about-img h4 {
    margin-top: 50px;
  }

  .holiday {
    margin-top: 50px;
    text-align: left;
  }

  .sights {
    position: absolute;
  }

  .lt {
    margin-top: 400px;
    margin-left: 50px;
  }

  .lt-vl {
    margin-top: 180px;
  }
</style>
