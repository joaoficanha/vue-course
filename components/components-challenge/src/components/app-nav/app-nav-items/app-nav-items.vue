<template>
  <v-list dense class="pt-0">
    <app-nav-item :items="itemsMenu" />
  </v-list>
</template>

<script>
import AppNavItem from "./app-nav-item.vue";

export default {
  components: {
    "app-nav-item": AppNavItem,
  },
  data() {
    return {
      itemsMenu: [
        { titulo: "Home", icon: "mdi-view-dashboard" },
        { titulo: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
