<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} 
                    <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
                </strong>
            </v-card-title>
            </v-card>

            <v-card>
            <v-container fill-height>
                <v-text-field 
                  :error="isTextFieldDisabled"
                  label="Quantity" 
                  type="number" 
                  v-model.number="quantity" 
                />
                <v-btn 
                  @click="sellStock"
                  :disabled="isButtonDisabled"
                  class="blue darken-3 white--text"
                >
                {{ insufficientQuantity ? 'Insufficient' : 'Sell'}}
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
    isTextFieldDisabled() {
      return this.insufficientQuantity || !Number.isInteger(this.quantity);
    },
    isButtonDisabled() {
      return (
        this.insufficientQuantity ||
        this.quantity <= 0 ||
        !Number.isInteger(this.quantity)
      );
    },
  },
  methods: {
    sellStock() {
      const sellOrder = {
        ...this.stock,
        quantity: this.quantity,
      };

      this.$store.dispatch("sellStock", sellOrder);
      this.quantity = 0;
    },
  },
};
</script>
