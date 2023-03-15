<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <app-page-title
          title="Dashboard"
          subtitle="Knowledge Base"
          icon="mdi-home-outline"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(stat, name) in stats" :key="name">
        <app-stat
          :title="name"
          :quantity="stat.quantity"
          :icon="stat.icon"
          :color="stat.color"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "../layout/PageTitle.vue";
import Stat from "./Stat.vue";
import stats from "./constants/stats";

export default {
  name: "app-home",
  components: {
    "app-page-title": PageTitle,
    "app-stat": Stat,
  },
  data() {
    return {
      stats,
    };
  },
  methods: {
    fetchStats() {
      this.$http.get("/stats").then((response) => {
        Object.keys(this.stats).map((key) => {
          this.stats[key].quantity = response.data[key];
        });
      });
    },
  },
  mounted() {
    this.fetchStats();
  },
};
</script>
