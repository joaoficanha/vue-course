<template>
    <v-layout row wrap>
      <PortfolioItem v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue";

export default {
  components: { PortfolioItem },
  computed: {
    stocks() {
      return this.$store.getters.boughtStocks;
    },
  },
};
</script>
