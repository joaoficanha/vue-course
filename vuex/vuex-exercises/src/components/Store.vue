<template>
    <Panel title="Virtual Store" green>
        <div class="store">
            <span>Add</span>
            <input type="number" v-model.number="quantity">
            <span>items of <strong>$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="add">Now!</button>
        </div>
    </Panel>
</template>

<script>
import {
  // mapMutations,
  mapActions,
} from "vuex";

export default {
  data() {
    return {
      id: 1,
    };
  },
  computed: {
    quantity() {
      return this.$store.state.parameters.quantity;
    },
    price() {
      return this.$store.state.parameters.price;
    },
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    add() {
      const product = {
        id: this.id,
        name: `Product ${this.id}`,
        quantity: this.quantity,
        price: this.price,
      };

      this.id++;
      // this.$store.products.push(product);
      // this.$store.commit("addProduct", product);
      // this.$store.dispatch("addProduct", product);
      this.addProduct(product);

      // console.log(this.$store.getters.getName);
      // console.log(this.$store.getters.getFullName);
    },
  },
};
</script>

<style>
.store {
  display: flex;
  justify-content: center;
}

.store > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
