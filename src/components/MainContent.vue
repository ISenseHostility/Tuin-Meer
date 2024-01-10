<template>
  <div class="wrapper">

    <div class="content-block">
      <figure class="content-part gallery">
        <agile :autoplay="true" :fade="true" :pause-on-hover="false" :nav-buttons="false" :dots="false" :autoplay-speed="5000">
          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg1.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg2.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg3.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg4.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg5.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg6.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg7.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg8.jpg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/aanleg/aanleg9.jpg" alt="Foto van een tuin in aanleg" />
          </div>
        </agile>
      </figure>

      <div class="content-part content-wrapper">
        <h2> Aanleg </h2>
        <p> Er kan een volledige <span class="bold-text"> aanleg </span> van een tuin worden verzorgd door ons. Er kan van alles veranderd worden in de tuin, of je nieuwe tegels wilt, nieuwe plantenbakken, of een nieuwe pergola, het kan allemaal.  </p>
      </div>
    </div>

    <hr>

    <div class="content-block">
      <div class="content-part content-wrapper">
        <h2> Onderhoud </h2>
        <p> Om uw tuin schoon en netjes te houden kunt u bij ons terecht voor <span class="bold-text"> onderhoud </span>. Dit omvat bijvoorbeeld bezigheden als het snoeien van planten of het maaien van gras. </p>
      </div>

      <figure class="content-part gallery">
        <agile :autoplay="true" :fade="true" :pause-on-hover="false" :nav-buttons="false" :dots="false" :autoplay-speed="5000">
          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/onderhoud/onderhoud1.jpg" alt="Foto van een tuin in onderhoud" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/onderhoud/onderhoud2.jpg" alt="Foto van een tuin in onderhoud" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/onderhoud/onderhoud3.jpg" alt="Foto van een tuin in onderhoud" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/onderhoud/onderhoud4.jpeg" alt="Foto van een tuin in onderhoud" />
          </div>
        </agile>
      </figure>
    </div>

    <hr>

    <div class="content-block">
      <figure class="content-part gallery">
        <agile :autoplay="true" :fade="true" :pause-on-hover="false" :nav-buttons="false" :dots="false" :autoplay-speed="5000">
          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/verlichting/verlichting1.jpeg" alt="Foto van een tuin in aanleg" />
          </div>

          <div class="slide">
            <img class="gallery-img" src="../assets/tuin_fotos/verlichting/verlichting2.jpeg" alt="Foto van een tuin in aanleg" />
          </div>
        </agile>
      </figure>

      <div class="content-part content-wrapper">
        <h2> Verlichting </h2>
        <p> Om de tuin beter in beeld te brengen kan er <span class="bold-text"> verlichting </span> geplaatst worden. Zo kunnen er bijvoorbeeld lampen in plantenbakken geplaatst worden om de planten op te laten vallen, of kunnen er voor veiligheidsredenen verlichting rond paden worden geplaatst. </p>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'MainContent',
    components: {
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-direction: column
    align-items: center

  .content-block
    width: 85vw
    display: flex
    justify-content: space-between
    margin: 2vh

  .gallery
    background: black
    flex-grow: 1

  .gallery-img
    max-height: 50vh

  .content-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    flex-grow: 1
    background: #161616

    & h2
      background: none
      font-size: 50px

    & p
      background: none
      font-size: 25px
      max-width: 90%

  .content-part
    max-width: 40vw
    margin: 1vw

  hr
    width: 90vw
    color: #FF6600
    border-color: #FF6600

  .bold-text
    background: #161616
    font-weight: bold

  @media only screen and (max-width: 500px)
    .wrapper
      justify-content: center
      align-items: center

    .content-block
      width: 90vw
      flex-direction: column
      margin: 4vh

    .content-part
      width: auto
      max-width: 90vw
      margin: 1vh

    .content-wrapper
      padding: 15px

      & h2
        font-size: 40px

      & p
        font-size: 20px

    .gallery-img
      height: auto
      width: 90vw

    hr
      width: 95vw
</style>