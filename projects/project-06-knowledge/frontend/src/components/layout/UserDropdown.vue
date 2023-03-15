<template>
  <v-menu :offsetY="true" open-on-hover close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-btn class="absolute" color="white" text v-on="on">
        <span>{{ user.name }}</span>
        <v-avatar class="mr-4 ml-4" color="white"></v-avatar>
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :href="item.link"
      >
        <v-list-item-title>
          <v-icon class="mr-4">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app-user-dropdown",
  computed: { ...mapGetters(["user"]) },
  data: () => ({
    items: [
      {
        title: "Administration",
        icon: "mdi-cogs",
        link: "/admin",
      },
      {
        title: "Logout",
        icon: "mdi-logout",
        link: "https://google.com",
      },
    ],
  }),
};
</script>

<style>
.absolute {
  height: 100% !important;
  position: absolute;
  right: 0;
  text-transform: none;
}
</style>
