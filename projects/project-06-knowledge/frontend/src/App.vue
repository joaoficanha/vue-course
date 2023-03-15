<template>
	<div id="app" :class="{ 'hide-menu': !isMenuOpen || !user }">
		<app-bar title="Knowledge Base" />
		<app-nav-bar />
		<app-content />
		<app-footer />
	</div>
</template>
  
<script>
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["isMenuOpen", "user"]),
  },
};
</script>
  
<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
