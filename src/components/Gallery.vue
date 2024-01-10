<template>
  <div class="wrapper">
    <figure class="gallery">
      <agile class="agile" :autoplay="true" :fade="true" :pause-on-hover="true" :nav-buttons="true" :dots="true" :autoplay-speed="5000">
        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen1.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen2.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen3.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen4.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen5.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen6.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen7.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen8.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <div class="slide">
          <img class="gallery-img" src="../assets/tuin_fotos/algemeen/algemeen9.jpg" alt="Foto van een tuin in aanleg" />
        </div>

        <template v-slot:prevButton><font-awesome-icon icon="fa-solid fa-chevron-left" :size="iconSize" /></template>
        <template v-slot:nextButton><font-awesome-icon icon="fa-solid fa-chevron-right" :size="iconSize" /></template>
      </agile>
    </figure>
  </div>
</template>

<script>
require('../assets/styles/gallery.sass');

export default {
  name: "Gallery",
  data: function () {
    return {
      iconSize: '5x'
    }
  },
  methods: {
    getIconSize() {
      if (window.innerWidth <= 500) {
        this.iconSize = '3x'
      } else {
        this.iconSize = '5x'
      }
    }
  },
  mounted() {
    this.getIconSize()
  }
}

</script>

<style lang="sass" scoped>
  .gallery
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 90vw
    margin: 4vh 0

  .gallery-img
    max-height: 90vh
    max-width: 90vw

  .slide
    align-items: center
    display: flex
    justify-content: center

  font-awesome-icon
    font-size: 90px

</style>