<template>
  <div class="wrapper-footer">
    <figure>
      <img src="../assets/logo/logo_transparent_dark.png" alt="Tuin & Meer logo" class="logo" @click="scrollTop()">
      <figcaption> © 2022 Jarno van der Meer </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      scrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper-footer
    display: flex
    justify-content: center
    background-color: black

  figure
    max-width: 90vw
    display: flex
    flex-direction: column
    align-items: center
    margin: 2vw

  figcaption
    color: gray
    margin-bottom: 2vh

  .logo
    height: 10vh
    max-width: 90vw
    background-color: black
    margin: 1vh 1vh 2vh

    &:hover
      cursor: pointer

</style>