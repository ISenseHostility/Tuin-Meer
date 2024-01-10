<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <h2> Contact </h2>
      <p class="contact-line"> Wilt u meer informatie verkrijgen of een afspraak maken? Neem contact met ons op. </p>
      <ul>
        <li class="link" @click="copyPhone()"><font-awesome-icon class="icon" icon="fa-solid fa-phone" size="1x" /> Telefoon: <a> 0645480131 </a> </li>
        <li class="link" @click="openMail()"><font-awesome-icon class="icon" icon="fa-solid fa-envelope" size="1x" /> Mail: <a> tuinenmeer.koos@gmail.com </a> </li>
        <li class="link" @click="openFacebook()"><font-awesome-icon class="icon" icon="fa-brands fa-facebook" size="1x" /> Facebook: <a> Tuin & Meer </a> </li>
        <li class="link" @click="openInstagram()"><font-awesome-icon class="icon" icon="fa-brands fa-instagram" size="1x" /> Instagram: <a> @tuinmeer </a> </li>
        <li class="link" @click="openKVK()"><font-awesome-icon class="icon" icon="fa-solid fa-landmark" size="1x" /> KVK: <a> 60150505 </a> </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    openFacebook() {
      window.open('https://m.facebook.com/profile.php?id=100057225828628#_=_')
    },
    openInstagram() {
      window.open('https://www.instagram.com/tuinmeer/')
    },
    openMail() {
      document.location = 'mailto:tuinenmeer.koos@gmail.com'
    },
    copyPhone() {
      navigator.clipboard.writeText('0645480131')
      alert('Telefoonnummer gekopieerd!')
    },
    openKVK() {
      window.open('https://www.kvk.nl/zoeken/?source=all&q=60150505&start=0&site=kvk2014')
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    justify-content: center
    align-items: center
    margin-top: 2vh

  .content-wrapper
    display: flex
    flex-direction: column
    align-items: center
    flex-grow: 1
    background: #161616
    max-width: 90vw
    margin: 1vw
    padding: 25px

    & h2
      background: none
      text-align: center
      font-size: 50px

    & p
      background: none
      font-size: 25px
      width: 90%

    & ul
      background: none
      font-size: 25px
      width: 90%

      & li
        background: none

  .contact-line
    margin-bottom: 5vh

  a
    color: #A7FF48
    background: none

  .link
    overflow-wrap: break-word
    text-align: left

    &:hover
      color: #FF6600
      cursor: pointer
      transition-duration: .3s

  .icon
    background: none

    & path
      color: #FF6600

  @media only screen and (max-width: 500px)
    .content-wrapper
      max-width: 70vw

      & h2
        font-size: 40px

      & p
        font-size: 20px

      & ul
        font-size: 20px

</style>