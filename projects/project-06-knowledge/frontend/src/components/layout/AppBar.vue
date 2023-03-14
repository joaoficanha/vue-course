<template>
  <v-app-bar elevation="0" class="gradient" app clipped-left>
    <v-app-bar-nav-icon @click="toggleMenu" color="white"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">
      <span>{{ title }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <app-user-dropdown />
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import UserDropdown from "./UserDropdown.vue";

export default {
  name: "app-bar",
  components: {
    "app-user-dropdown": UserDropdown,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["toggleMenu"]),
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(to right, #1e469a, #49a7c1);
}
</style>
