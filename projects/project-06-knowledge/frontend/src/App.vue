<template>
  <v-app>
    <app-bar title="Knowledge Base" />
    <app-nav-bar />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from "./components/layout/AppBar.vue";
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
import Content from "./components/layout/Content.vue";

export default {
  name: "App",
  components: {
    "app-bar": AppBar,
    "app-nav-bar": NavBar,
    "app-content": Content,
    "app-footer": Footer,
  },
};
</script>

<style></style>
