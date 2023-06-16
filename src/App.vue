<template>
  <div id="app">
    <Cardapio />
  </div>
</template>

<script>
import Cardapio from "./components/Cardapio.vue";

export default {
  name: "App",
  components: {
    Cardapio,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
</style>
