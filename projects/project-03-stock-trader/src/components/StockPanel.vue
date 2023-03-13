<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card :class="variant" class="darken-3 white--text">
            <v-card-title class="headline">
            <strong>
            {{ stock.name }} 
            <small v-if="variant === 'blue'">(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
            <small v-else>(Price: {{ stock.price | currency }})</small>
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
                @click="handleButtonClick"
                :disabled="isButtonDisabled"
                :class="variant"
                class="darken-3 white--text"
                >
                {{ buttonLabel }}
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
    variant: {
      type: String,
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
    buttonLabel() {
      if (this.insufficientQuantityOrBalance) {
        return "Insufficient";
      }

      if (this.variant === "blue") {
        return "Sell";
      }

      return "Buy";
    },
    insufficientQuantityOrBalance() {
      if (this.variant === "blue") {
        return this.quantity > this.stock.quantity;
      }

      return this.quantity * this.stock.price > this.balance;
    },
    isTextFieldDisabled() {
      return (
        this.insufficientQuantityOrBalance ||
        !!(this.quantity && !Number.isInteger(this.quantity))
      );
    },
    isButtonDisabled() {
      return (
        this.insufficientQuantityOrBalance ||
        this.quantity <= 0 ||
        !Number.isInteger(this.quantity)
      );
    },
  },
  methods: {
    handleButtonClick() {
      const order = {
        ...this.stock,
        quantity: this.quantity,
      };

      if (this.variant === "blue") {
        this.$store.dispatch("sellStock", order);
      } else {
        this.$store.dispatch("buyStock", order);
      }

      this.quantity = 0;
    },
  },
};
</script>
