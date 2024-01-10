<template>
  <div>
    <TopBar />
    <div class="wrapper">
      <Banner />
      <MainContent />
      <hr />
      <Gallery />
      <hr />
      <RTLVideo/>
      <hr />
      <Contact id="contact-section" />
      <Footer />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import MainContent from "@/components/MainContent";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import RTLVideo from "@/components/RTLVideo";

export default {
  name: "Home",
  components: {
    MainContent,
    TopBar,
    Banner,
    Footer,
    Contact,
    Gallery,
    RTLVideo
  }

}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-direction: column
    align-items: center

  hr
    width: 95vw
    color: #FF6600
    border-color: #FF6600

</style>