<template>
    <v-layout row wrap>
        <StockPanel 
          v-for="stock in stocks" 
          :key="stock.id" 
          :stock="stock" 
          variant="green"
        />
    </v-layout>
</template>

<script>
import StockPanel from "./StockPanel.vue";

export default {
  components: { StockPanel },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
