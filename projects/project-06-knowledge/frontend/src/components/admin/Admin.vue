<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <app-page-title
          title="System Administration"
          subtitle="Registers"
          icon="mdi-cogs"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "../layout/PageTitle.vue";

export default {
  name: "app-admin",
  components: {
    "app-page-title": PageTitle,
  },
};
</script>
