<template>
    <Panel title="Parameters" red>
        <div class="parameters">
            <span>
                <strong>Default Quantity: </strong> 
                <input type="number" v-model="quantity">
            </span>
            <span>
                <strong>Default Price: </strong>
                <input type="number" v-model="price">
            </span>
        </div>
    </Panel>
</template>

<script>
export default {
  computed: {
    quantity: {
      get() {
        return this.$store.state.parameters.quantity;
      },
      set(value) {
        this.$store.commit("setQuantity", value);
      },
    },
    price: {
      get() {
        return this.$store.state.parameters.price;
      },
      set(value) {
        this.$store.commit("setPrice", value);
      },
    },
  },
};
</script>

<style>
.parameters {
  display: flex;
  justify-content: space-around;
}
</style>
