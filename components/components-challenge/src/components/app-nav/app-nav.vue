<template>
  <v-navigation-drawer app>
    <app-nav-toolbar />
    <v-divider></v-divider>
    <app-nav-items />
  </v-navigation-drawer>
</template>

<script>
import AppNavToolbar from "./app-nav-toolbar.vue";
import AppNavItems from "./app-nav-items/app-nav-items.vue";

export default {
  components: {
    "app-nav-toolbar": AppNavToolbar,
    "app-nav-items": AppNavItems,
  },
};
</script>
