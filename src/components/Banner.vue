<template>
  <div class="flex">
    <figure>
      <img src="../assets/tuin_fotos/algemeen/algemeen3.jpg" alt="Achtergrondfoto van tuin">
      <div class="text-wrapper">
        <h1 id="coverText" class="banner-text"></h1>
        <button class="banner-text contact-box" @click="goToContact()">Contact</button>
      </div>
    </figure>
  </div>
</template>

<script>
let counter = 0;
const coverTexts = ['Aanleg', 'Onderhoud', 'Verlichting', 'Schuttingen'];

export default {
  name: "Banner",
  methods: {
    cycleCoverText() {
      document.getElementById('coverText').innerHTML = coverTexts[counter]

      if (counter < coverTexts.length - 1) {
        counter++
      } else {
        counter = 0
      }
    },
    goToContact() {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth'})
    }
  },
  mounted() {
    setInterval(this.cycleCoverText, 4000)
    this.cycleCoverText()
  },
  data () {
    return {
      timer: null
    }
  }
}

</script>

<style lang="sass" scoped>
  .flex
    display: flex

  .text-wrapper
    display: flex
    flex-direction: column
    align-items: center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 30px
    background: rgba(0, 0, 0, 0.6)
    width: 15vw
    height: 8vw

  figure
    filter: drop-shadow(-2vw 0 0 #0A1017)

  img
    width: 100vw
    max-height: 80vh
    object-fit: cover

  #coverText
    font-size: 50px

  .banner-text
    display: block
    background: none

  .contact-box
    margin-top: 20px
    background: none
    font-size: 20px
    padding: 15px
    border-radius: 12px
    border: 3px solid #A7FF48
    transition-duration: .3s

  .contact-box:hover
    cursor: pointer
    color: #A7FF48

  .contact-box:active
    border: 3px solid white
    color: white

  @media only screen and (max-width: 500px)
    img
      height: 60vh
      width: 100vw

    #coverText
      font-size: 40px

    .text-wrapper
      width: 60vw
      height: 35vw

</style>
