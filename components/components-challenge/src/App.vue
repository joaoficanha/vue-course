<template>
  <v-app>
    <app-nav />
    <app-bar />
    <v-main>
      <app-caroulsel />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppNav from "./components/app-nav/app-nav.vue";
import AppBar from "./components/app-bar.vue";
import AppFooter from "./components/app-footer.vue";
import AppCaroulsel from "./components/app-caroulsel.vue";

export default {
  components: {
    "app-nav": AppNav,
    "app-bar": AppBar,
    "app-footer": AppFooter,
    "app-caroulsel": AppCaroulsel,
  },
};
</script>
