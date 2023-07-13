<template>
  <div class="container">
    <LoaderComponent/>
    <NavBar/>
    <MainContent/>
    <FooterContent/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent";
import FooterContent from "@/components/FooterContent";
import LoaderComponent from "@/components/LoaderComponent.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent,
    FooterContent,
    LoaderComponent,
  },

}
</script>

<style src="./assets/css/style.css">
</style>
