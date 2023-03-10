<template>
    <Panel title="Summary" purple>
        <div class="summary">
            <span>Total: <strong>{{ totalValue | money }}</strong></span>
            <hr>
            <button>Purchase!</button>
        </div>
    </Panel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("cart", ["totalValue"]),
  // computed: mapGetters({
  //   total: 'totalValue'
  // }),
  // computed: {
  //   totalValue() {
  //     return this.$store.getters.totalValue;
  //   },
  // },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
