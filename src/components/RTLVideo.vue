<template>
  <div class="wrapper">
    <figure class="title-wrapper">
      <img id="tuinenmeer-logo" src="../assets/logo/logo_transparent.png" alt="Tuin & Meer logo" />
      <img id="rtl4-logo" src="../assets/logo/RTL4_Logo_2016.png" alt="RTL4 logo" />
    </figure>
    <video controls>
      <source src="../assets/videos/tuinenmeer-rtl4-hq.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "RTLVideo",
  data: function () {
    return {
      iconSize: '10x'
    }
  },
  methods: {
    getIconSize() {
      if (window.innerWidth <= 500) {
        this.iconSize = '4x'
      } else {
        this.iconSize = '8x'
      }
    }
  },
  mounted() {
    this.getIconSize()
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  margin: 4vh 0

  .title-wrapper
    width: 85vw
    display: flex
    justify-content: center
    align-items: center

    img
      max-height: 20vh

  video
    width: 85vw

  @media only screen and (max-width: 500px)
    .title-wrapper
      flex-direction: column

      img#tuinenmeer-logo
        max-height: none
        max-width: 85vw

      img#rtl4-logo
        max-height: 15vh

      & .icon
        padding: 10px

</style>