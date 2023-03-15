<template>
    <div class="home">
        <app-page-title title="Dashboard" subtitle="Knowledge Base" icon="fa fa-home"/>
        <div class="stats">
            <app-stat v-for="(stat, name) in stats" :key="name" :title="name" :quantity="stat.quantity" :icon="stat.icon" :color="stat.color"/>
        </div>
    </div>
</template>

<script>
import stats from "./constants/stats";

import PageTitle from "../layout/PageTitle";
import Stat from "./Stat";

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

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
