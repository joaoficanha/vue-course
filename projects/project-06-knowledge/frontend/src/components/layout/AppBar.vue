<template>
  <v-app-bar elevation="0" class="gradient" app clipped-left>
    <v-app-bar-nav-icon
      :ripple="false"
      class="nav-icon"
      @click="toggleMenu"
      color="white"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <router-link to="/" style="text-decoration: none">
      <v-toolbar-title class="white--text">
        <span>{{ title }}</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <app-user-dropdown v-if="!hideDropdown" />
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
  data() {
    return {
      hideDropdown: false,
    };
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(to right, #1e469a, #49a7c1);
}

.nav-icon {
  position: absolute;
  left: 0;
  margin: 0 !important;
  height: 100% !important;
  width: 60px !important;
  border-radius: unset;
}
</style>
