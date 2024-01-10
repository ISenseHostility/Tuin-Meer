<template>
  <div>
    <img src="../assets/logo/logo_transparent.png" alt="Tuin & Meer logo" @click="refresh()">
  </div>
</template>

<script>

  export default {
    name: 'TopBar',
    components: {
    },
    methods: {
      refresh() {
        location.href = ''
      }
    }
  }
</script>

<style lang="sass" scoped>
  *
    background: black

  img
    max-width: 30vw
    padding: 1vw

    &:hover
      cursor: pointer

  @media only screen and (max-width: 500px)
    div
      display: flex
      justify-content: center

    img
      max-width: 80vw

</style>