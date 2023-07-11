<template>
  <div class="container">
    <NavBar/>
    <MainContent/>
    <FooterContent/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent";
import FooterContent from "@/components/FooterContent";

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent,
    FooterContent,
  }
}
</script>

<style src="./assets/css/style.css">
</style>
