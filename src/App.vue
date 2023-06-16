<template>
  <div id="app">
    <!-- <Cardapio /> -->
    <BackOffice />
  </div>
</template>

<script>
// import Cardapio from "./components/Cardapio.vue";
import BackOffice from "./components/BackOffice.vue";

export default {
  name: "App",
  components: {
    // Cardapio,
    BackOffice,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
</style>
