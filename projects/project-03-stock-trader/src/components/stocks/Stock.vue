<template>
   <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Price: {{ stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field :error="insufficientBalance" label="Quantity" type="number" v-model.number="quantity" />
                <v-btn 
                  @click="buyStock"
                  :disabled="quantity < 0 || insufficientBalance" 
                  class="green darken-3 white--text"
                >
                  {{ insufficientBalance ? 'Insufficient' : 'Buy' }}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    balance() {
      return this.$store.getters.balance;
    },
    insufficientBalance() {
      return this.quantity * this.stock.price > this.balance;
    },
  },
  methods: {
    buyStock() {
      const order = {
        ...this.stock,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>
